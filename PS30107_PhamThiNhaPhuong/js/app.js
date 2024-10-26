import { trinhtham_arr, vanhoc_arr, tamly_arr, thieunhi_arr } from './data.js';
const hien1TrinhTham = (trinhtham) => {
    return `<div>
     <h3> ${trinhtham.ten} </h4>
     <img src="${trinhtham.hinh}">
     <h4>Tác Giả:   ${trinhtham.tacgia} </p>
     <h4>Giá: ${trinhtham.gia} </p>
     <p>Ghi Chú:   ${trinhtham.ghichu}</p>
</div>`;
};
export const showlisttrinhtham = () => {
    const html_arr = trinhtham_arr.map(hien1TrinhTham);
    return html_arr.join("");
    let str = ``;
    trinhtham_arr.forEach(trinhtham => str += hien1TrinhTham(trinhtham));
    return str;
};
const hien1VanHoc = (vanhoc) => {
    return `<div>
    <h3> ${vanhoc.ten} </h4>
    <img src="${vanhoc.hinh}">
    <h4>Tác Giả:   ${vanhoc.tacgia} </p>
    <h4>Giá: ${vanhoc.gia} </p>
    <p>Ghi Chú:   ${vanhoc.ghichu}</p>
</div>`;
};
export const showlistvanhoc = () => {
    const html_arr = vanhoc_arr.map(hien1VanHoc);
    return html_arr.join("");
    let str = ``;
    vanhoc_arr.forEach(vanhoc => str += hien1VanHoc(vanhoc));
    return str;
};
const hien1TamLy = (tamly) => {
    return `<div>
    <h3> ${tamly.ten} </h4>
    <img src="${tamly.hinh}">
    <h4>Tác Giả:   ${tamly.tacgia} </p>
    <h4>Giá: ${tamly.gia} </p>
    <p>Ghi Chú:   ${tamly.ghichu}</p>
</div>`;
};
export const showlisttamly = () => {
    const html_arr = tamly_arr.map(hien1TamLy);
    return html_arr.join("");
    let str = ``;
    tamly_arr.forEach(tamly => str += hien1TamLy(tamly));
    return str;
};
const hien1ThieuNhi = (thieunhi) => {
    return `<div>
    <h3> ${thieunhi.ten} </h4>
    <img src="${thieunhi.hinh}">
    <h4>Tác Giả:   ${thieunhi.tacgia} </p>
    <h4>Giá: ${thieunhi.gia} </p>
    <p>Ghi Chú:   ${thieunhi.ghichu}</p>
</div>`;
};
export const showlistthieunhi = () => {
    const html_arr = thieunhi_arr.map(hien1ThieuNhi);
    return html_arr.join("");
    let str = ``;
    thieunhi_arr.forEach(thieunhi => str += hien1ThieuNhi(thieunhi));
    return str;
};
