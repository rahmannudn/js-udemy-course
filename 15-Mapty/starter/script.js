'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

const formRows = document.querySelectorAll('.form__row');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.distance = distance; //in km
    this.duration = duration; //in min
    this.coords = coords; //[latitude,longtitude]
  }
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDay()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadance) {
    super(coords, distance, duration);
    this.cadance = cadance;

    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;

    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

///////////////////////////
// application architecture
class App {
  #map;
  #mapEvent;
  #workout = [];
  #mapZoomLevel = 14;

  constructor() {
    // get position
    this._getPosition();

    // get data from local storage
    this._getLocalStorage();

    // event listener
    inputType.addEventListener('change', this._toggleElevationField);
    form.addEventListener('submit', this._newWorkout.bind(this));
    containerWorkouts.addEventListener('click', this._moveToPopUp.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('could not get your position');
        }
      );
  }

  _loadMap(position) {
    // execute when getting position is success
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    this.#workout.forEach(work => {
      this._renderPopupMarker(work);
    });
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _showForm(mapE) {
    form.classList.remove('hidden');
    this.#mapEvent = mapE;
    inputDistance.focus();
  }

  _hideForm() {
    // clear all input
    inputCadence.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
      inputDistance.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _newWorkout(e) {
    e.preventDefault();

    const isInputsNumber = (...inputs) => {
      return inputs.every(input => Number.isFinite(input));
    };
    const isInputsPositive = (...inputs) => {
      return inputs.every(input => input > 0);
    };

    // get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let temp_workout;

    // if workout is running, create running object
    if (type === 'running') {
      const cadance = +inputCadence.value;
      // check if data is valid
      if (
        !isInputsNumber(distance, duration, cadance) ||
        !isInputsPositive(distance, duration, cadance)
      )
        return alert('input have to be positive number');

      temp_workout = new Running([lat, lng], distance, duration, cadance);
    }
    // if workout is cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !isInputsNumber(distance, duration, elevation) ||
        !isInputsPositive(distance, duration)
      )
        return alert('input have to be positive number');

      temp_workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this.#workout.push(temp_workout);
    // console.log(this.#workout);
    console.log(temp_workout);
    // add new object to workout array
    // render workout on map as marker
    this._renderPopupMarker(temp_workout);
    // render workout on the list
    this._renderWorkout(temp_workout);
    // hide form and clear input field
    this._hideForm();
    // set the workout to localstorage
    this._setLocalStorage();
  }
  _renderPopupMarker(workout) {
    const [lat, lng] = workout.coords;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        }).setContent(workout.type)
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">Running on April 14</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    `;

    if (workout.type === 'running')
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadance}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>`;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopUp(e) {
    const target = e.target.closest('.workout');

    // return nothing when click outside the workout class
    if (!target) return;
    const workoutID = target.dataset.id;
    const workout = this.#workout.find(work => work.id === workoutID);
    // console.log(workoutID);
    // console.log(workout);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    console.log(workout);
    // workout.click();
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workout));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;
    this.#workout = data;
    data.forEach(work => {
      this._renderWorkout(work);
    });
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();

console.log(app);
