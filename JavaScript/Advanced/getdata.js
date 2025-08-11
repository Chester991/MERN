function getdata(dataid) {
    console.log("data", dataid);
} // if it takes 2 second time to send data
getdata(123)


function getdata(dataid) {
    setTimeout(() => {
        console.log("data", dataid);
    }, 2000);
}

// setTimeout will print data but after 2 seconds 