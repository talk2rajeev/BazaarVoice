import { TOTAL_RATING } from '../config/constants';

export function ratingPercentageCal(rating){

    const starPercentage = (rating / TOTAL_RATING) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;

    return starPercentageRounded;
}