import _ from 'lodash';

export function paginate(items,currentPage,dataCount){
    const startIndex=(currentPage-1)*dataCount;
    return _(items).slice(startIndex).take(dataCount).value();
}