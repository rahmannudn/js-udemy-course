'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const img = document.createElement('img');

///////////////////////////////////////

const renderCountry = function (data, neighbour = '') {
  const html = `
        <article class="${neighbour ? 'neighbour' : 'country'}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(2)} people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].code
                }</p>
            </div>
        </article>
  `;
  // countriesContainer.style.opacity = 1;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// const getNeighbour = function (data, indexOfNeightbour = 0) {
//   const request2 = new XMLHttpRequest();
//   request2.open(
//     'GET',
//     `https://restcountries.com/v2/alpha/${data?.borders[indexOfNeightbour]}`
//   );
//   request2.send();
//   request2.addEventListener('load', function () {
//     const data2 = JSON.parse(this.responseText);
//     renderCountry(data2, true);
//   });
// };

// const getCountry = function (country, neighbour = '', indexOfNeightbour = 0) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     neighbour ? getNeighbour(data, indexOfNeightbour) : '';
//   });
// };

// const getFetchNeightbor = function (data) {
//   fetch(`https://restcountries.com/v2/alpha/${data?.borders[0]}`)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (neightborData) {
//       renderCountry(neightborData, 1);
//     });
// };

// const getFetchCountry = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(
//       res => {
//         if (!res.ok) throw new Error(`country not found (${res.status})`);
//         return res.json();
//       }
//       // err => alert(err)
//     )
//     // .catch(err => renderError(err.message))
//     .then(function (data) {
//       const [countryData] = data;
//       const neighbour = countryData?.borders[0];
//       if (!neighbour) return;

//       renderCountry(countryData);

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(res => res.json())
//     .catch(err => {
//       renderError(err.message);
//     })
//     .then(neighbourData => renderCountry(neighbourData, 'neightbour'))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// helper function for getting data
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(res => {
//     if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
//     return res.json();
//   });
// };

// getJSON(
//   `https://restcountries.com/v2/name/indonesia`,
//   'country not found'
// ).then(data => {
//   console.log(data);
//   renderCountry(data[0]);
//   countriesContainer.style.opacity = 1;
// });

// const getFetchCountry = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(neighbourData => renderCountry(neighbourData, 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(`something went error ${err.message}. try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//       btn.style.marginTop = '20px';
//     });
// };

// btn.addEventListener('click', function () {
//   getFetchCountry('australia');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// https://geocode.xyz/51.50354,-0.12768?geoit=json&auth=116014297226748e15793409x5138
// https://geocode.xyz/51.50354,-0.12768?geoit=json

// const getLocation = function () {
//   const geo = navigator.geolocation;
//   if (!geo) {
//     alert('ur browser doesnt support');
//     return;
//   }
//   geo.getCurrentPosition(pos => {
//     const {
//       coords: { latitude: lat, longitude: lng },
//     } = pos;
//     whereAmI(lat, lng);
//   });
// };

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`problem with geocoding (${res.status})`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`you're in ${data.city} ${data.state}, ${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(` country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => {
//       console.error(`${err.message}. 💥`);
//       countriesContainer.insertAdjacentText('afterbegin', `${err.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   // getLocation();

//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
//   btn.style.marginTop = '20px';
// });

// console.log('test start ');
// setTimeout(() => console.log('0 second timer'), 0);
// // promise will be execute after 'test start' because it store in (micro tasks queue) that has priority over callstack
// Promise.resolve('resolved promise 1').then(res => console.log(res));
// Promise.resolve('resolved promise 2').then(res => {
//   for (let i = 0; i < 100000; i++) {}
//   console.log(res);
// });
// console.log('test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('lottery is starting');

//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       resolve('You win 🔥');
//     } else {
//       reject('you lose your money 💩');
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// -- this is bad --
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// -- this is better way --
// promisifying setTimeout
// const wait = second =>
//   new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

// resolve, reject immediately
// Promise.resolve('abc').then(a => console.log(a));
// Promise.reject('abc').catch(a => console.err(a));

// promisifying geolocation API
// const getLocation = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(function (location) {
//       resolve(location);
//     }),
//       function (err) {
//         reject(console.error(err));
//       };
//   });
// };

// const whereAmI = function () {
//   getLocation().then(res => {
//     const { latitude: lat, longitude: lng } = res.coords;
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//       .then(res => {
//         if (!res.ok) throw new Error(`problem with geocoding (${res.status})`);
//         return res.json();
//       })
//       .then(data => {
//         console.log(data);
//         console.log(`you're in ${data.city} ${data.state}, ${data.country}`);
//         return fetch(`https://restcountries.com/v2/name/${data.country}`);
//       })
//       .then(res => {
//         if (!res.ok) throw new Error(` country not found (${res.status})`);
//         return res.json();
//       })
//       .then(data => {
//         renderCountry(data[0]);
//         if (!data[0].borders) throw new Error('no neighbour found');
//         return fetch(
//           `https://restcountries.com/v2/alpha/${data[0]?.borders[0]}`
//         );
//       })
//       .then(res => res.json())
//       .then(data => {
//         renderCountry(data, 'neighbour');
//       })
//       .catch(err => {
//         console.error(`${err.message}. 💥`);
//         countriesContainer.insertAdjacentText('afterbegin', `${err.message}`);
//       })
//       .finally(() => (countriesContainer.style.opacity = 1));
//   });
// };

// btn.addEventListener('click', function () {
//   whereAmI();
// });

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const createImage = function (url) {
//   const imgEl = document.createElement('img');
//   imgEl.src = url;
//   imgEl.style.maxHeight = '80vh';

//   imgEl.addEventListener('load', function () {
//     countriesContainer.append(imgEl);
//   });

//   btn.style.display = 'none';
//   countriesContainer.style.opacity = 1;
// };

// createImage('https://source.unsplash.com/random');

// const imageContainer = document.querySelector('.images');

// let currentImg;

// const wait = second =>
//   new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });

//1. ----- JONAS SOLUTION -------
// const createImage = function (imagePath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imagePath;

//     img.addEventListener('load', function () {
//       imageContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Wrong image path'));
//     });
//   });
// };

// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     wait(2)
//       .then(() => {
//         currentImg.style.display = 'none';

//         return wait(2);
//       })
//       .then(() => {
//         return createImage('./img/img-2.jpg');
//       })
//       .then(img => {
//         currentImg = img;

//         return wait(2);
//       })
//       .catch(err => console.error(err))
//       .then(() => (currentImg.style.display = 'none'));
//   })
//   .catch(err => console.error(err));

//2. -------- MY SOLUTION ---------
// let i = 1;

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const imgEl = document.createElement('img');
//     imgEl.src = imgPath;

//     imgEl.addEventListener('load', function () {
//       imageContainer.append(imgEl);
//       resolve(imgEl);
//     });

//     imgEl.addEventListener('error', function () {
//       reject(new Error('wrong path image'));
//     });
//   });
// };

// createImage('./img/img-1.jpg')
//   .then(res => {
//     wait(2).then(() => (res.style.display = 'none'));

//     return wait(2);
//   })
//   .catch(err => console.error(err))

//   .then(() => {
//     i++;
//     createImage('./img/img-2.jpg')
//       .then(res => {
//         wait(2).then(() => (res.style.display = 'none'));
//       })
//       .catch(err => console.error(err));

//     return wait(2);
//   })

//   .then(() => {
//     i++;
//     createImage('./img/img-3.jpg')
//       .then(res => {
//         wait(2).then(() => (res.style.display = 'none'));
//       })
//       .catch(err => console.error(err));
//   });

// const getLocation = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // const pos = await getPosition();
//     // const { latitude: lat, longitude: lng } = pos.coords;

//     // // Reverse geocoding
//     // const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     // if (!resGeo.ok) throw new Error('Problem getting location data');

//     // const dataGeo = await resGeo.json();
//     // console.log(dataGeo);

//     const location = await getLocation();
//     const {
//       coords: { latitude: lat, longitude: lng },
//     } = location;

//     // console.log(lat, lng);

//     // get country name based latitude, longitude
//     const geoCode = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!geoCode.ok)
//       throw new Error(
//         `something wrong with geocode, try again (${geoCode.status})`
//       );
//     const countryData = await geoCode.json();

//     // console.log(countryData);

//     // get country data based country name
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${countryData.country}`
//     );
//     const data = await res.json();

//     // finally
//     countriesContainer.style.opacity = 1;
//     renderCountry(data[0]);
//     return `you live in ${countryData.city}, ${countryData.country}`;
//   } catch (err) {
//     document.writeln(`💥 ${err.message}`);

//     // reject promise returned from async func
//     throw err;
//   }
// };

// console.log('1. will get location');

// whereAmI()
//   .then(res => console.log(res))
//   .catch(err => console.error(`2. :  ${err}`))
//   .finally(console.log('3. finished  getting location'));

// whereAmI();

// (async function () {
//   try {
//     console.log('1. will get location');
//     const locationData = await whereAmI();
//     console.log(locationData);
//   } catch (err) {
//     console.error(err);
//   }
//   console.log('3. finished getting location');
// })();

const getJSON = async function (url, errorMsg = 'Something went wrong') {
  // return fetch(url).then(res => {
  //   if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);

  //   return res.json();
  // });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`something went wrong ${res.status}`);
  return await res.json();
};

const getCountries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    const capital = data.map(data => data.map(d => d.capital));
    console.log(capital);
  } catch (err) {
    console.error(err);
  }
};

// getCountries('portugal', 'canada', 'tanzania');
// const timeOut = function (second) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       reject('taking data is too long');
//     }, second * 1000);
//   });
// };
// promise.race
// Promise.race([

//   getJSON(`https://restcountries.com/v2/name/indonesia`),
//   getJSON(`https://restcountries.com/v2/name/japan`),
//   getJSON(`https://restcountries.com/v2/name/singapore`),
//   timeOut(0.1),
// ])
//   .then(data => console.log(data[0]))
//   .catch(err => console.error(err));

// promise.allSettled
// Promise.allSettled([
//   getJSON(`https://restcountries.com/v2/name/china`),
//   Promise.resolve('resolved'),
//   Promise.reject(new Error('ERROR')),
//   timeOut(2),
// ]).then(data => console.log(data));

// timeOut(1);
// console.log('this log will be display after 2 second');

// coding challange #3
/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const imageContainer = document.querySelector('.images');
const createImage = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imagePath;

    img.addEventListener('load', function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Wrong image path'));
    });
  });
};

const wait = second =>
  new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });

// const loadNPause = async function () {
//   try {
//     let currentImg;

//     currentImg = await createImage('./img/img-1.jpg');
//     await wait(2);

//     // make img disappear for 2 sec
//     currentImg.style.display = 'none';
//     await wait(2);

//     // display another image
//     currentImg = await createImage('./img/img-2.jpg');
//     currentImg.style.display = 'block';
//     await wait(2);

//     // hidden image
//     currentImg.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };

// loadNPause();

const loadAll = async function ([...imgPath]) {
  const imgs = await imgPath.map(img => createImage(img));
  console.log(imgs);
  const data = await Promise.all(imgs);
  await data.forEach(el => {
    el.classList.add('parallel');
  });
};

// createImage('img/img-1.jpg').then(el => {
//   console.log(el);

//   // return createImage('img/img-2.jpg');
// });
// .then(el => {
//   console.log(el);

//   return createImage('img/img-3.jpg');
// })
// .then(el => {
//   console.log(el);
// });

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
