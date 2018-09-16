var base = [{ a: "Petrov", b: 2000, c: 2005 },
            { a: "Ivanov", b: 2010, c: 2015 },
            { a: "Sidorov", b: 2007, c: 2012 }
 ]
function getStudents(s, e) {
    for (var i = 0; i < base.length; i++) {
        if (base[i].b >= s && base[i].b <= e || base[i].c >= s && base[i].c <= e) {
            console.log(base[i].a)
        }
        else {
            continue;
        }
    }
}
getStudents(2000, 2010);

