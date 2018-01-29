
export function readOnlyRatingStar(starPercentageRounded){
    return `<div class="stars-outer pull-left">
                <div class="stars-inner" style="width:${starPercentageRounded}"></div>
            </div>`;
}