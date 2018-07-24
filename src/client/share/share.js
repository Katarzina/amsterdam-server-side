// latitude longitude to km
import { _ , includes } from "lodash";

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // km
    let dLat = toRad(lat2-lat1);
    let dLon = toRad(lon2-lon1);
    let latRad1 = toRad(lat1);
    let latRad2 = toRad(lat2);

    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(latRad1) * Math.cos(latRad2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

const toRad = (value) => value * Math.PI / 180;

export const commaToPointReplace = (jsonString = "") => jsonString.replace(',','.');

export let filterByTitle = ( data, value ) => {
    return data.filter(({title}) => {
        return title.toLowerCase().includes(value);
    })
}

export const uniqueData = ( dataFromJsonObject ) => {

    let uniqueSet = [];

    let checkSetOnValue = ( uniqueSet, value) => {
        let flag = false;
        uniqueSet.forEach( item => (_.includes(item, value)) ? flag = true : null)
        return flag
    }

    dataFromJsonObject.forEach ( (item, index) => {
            (index === 0) ? uniqueSet.push(item) : null;
            ( checkSetOnValue(uniqueSet, item.trcid )) ? null : uniqueSet.push(item);
        })
    return uniqueSet;
}

