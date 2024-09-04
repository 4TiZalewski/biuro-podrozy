// Copyright (c) 2024 4TiZalewski

// @ts-check

/**
 * @type {NodeListOf<HTMLInputElement>}
 */
const country_selection = document.querySelectorAll("nav input");

/**
 * @type {NodeListOf<HTMLImageElement>}
 */
const images = document.querySelectorAll("main img");

/**
 * @type {Map<String, Array<String>>}
 */
const image_urls = new Map();

image_urls.set("pl",
[ "https://www.gospodarek.pl/wp-content/uploads/2020/03/MG_2195.jpg"
, "https://polskazachwyca.pl/wp-content/uploads/2018/08/tatry-rzeka-bia%C5%82ka-shutterstock_1092041300.jpg"
]);

image_urls.set("de",
[ "https://ocdn.eu/images/lech/MmI7MDA_/6673aec896f584052625f18f67f4e573.jpg"
, "https://www.radio.bialystok.pl/src/461/28a8d836e5a49abb3e59f34bdc67cf5a"
]);

image_urls.set("fi",
[ "https://www.yit.pl/contentassets/9bc1e68599f145fa9cf43823a583d35d/imagewcvk.png"
, "https://www.tapeciarnia.pl/tapety/normalne/tapeta-krajobraz-hyyppaanvuori-w-finlandii.jpg"
]);

if (images.length < 1) {
    console.error("No images!");
}
            
change_country_pictures("pl");

country_selection.forEach(entry => {
    entry.addEventListener("change", (_) => {
        let selected_country = "pl";
        for (let i = 0; i < country_selection.length; i++) {
            const element = country_selection[i];
            if (element.checked) {
                selected_country = element.value;
                break;
            }
        }

        if (selected_country) {
            change_country_pictures(selected_country);
        }
    });
});

/**
 * @param {string} country_id 
 */
function change_country_pictures(country_id) {
    const country_image_urls = image_urls.get(country_id);
    if (country_image_urls) {
        for (let i = 0; i < images.length; i++) {
            const element = images[i];
            const image_url = country_image_urls[i];
            element.src = image_url;
        }
    }
}