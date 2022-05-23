// function color_change() {
    if ( localStorage.getItem("theme") === null) {
        let theme = "light";
    } else {
        let theme = localStorage.getItem("theme");
    }
// }