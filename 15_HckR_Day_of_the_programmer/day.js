function dayOfProgrammer(year) {
    var leap = 0; //make 1 if it is a leap year...remove a day
    if(year < 1918){
        if(year%4 === 0){leap = -1}
        return(13 + leap + ".09." + year);
    }else if(year > 1918){
        if(year%4 === 0 && year%100 !== 0 || year%400 === 0){leap = -1};
        return(13 + leap + ".09." + year);
    }else{ //case for 1918
        return("26.09.1918");
    }
}

//The Programmer's day is celebrated on the 0x100, 2^8 or 256th day of the year – September 13 on a regular year and September 12 on a leap one. The number 256 relates to the 8-bit byte – a very important unit to the programmers. It represents the maximum number of distinct values in one byte, including the zero.