let products_has_options = [
    /*ID_del_producto*/ /*ID_de_la_opcion*/  /*cantidad*/  /*precio*/  /*en_venta*/ /*especificaciones*/
    [1200,              1201,                   3,          1299,       1,          'Macbook Pro 13.3-inch (diagonal) LED-backlit display with IPS technology; 2560-by-1600 native resolution at 227 pixels'],
    [1200,              1202,                   2,          2199,       0,          'Macbook Pro 15.4-inch (diagonal) LED-backlit display with IPS technology; 2880-by-1800 native resolution at 220 pixels'],
    [1300,              1301,                   1,          999,        0,          'Macbook Air 11.6-inch (diagonal) LED-backlit glossy widescreen display with support for millions of colors'],
    [1300,              1302,                   4,          1099,       1,          'Macbook Air 13.3-inch (diagonal) LED-backlit glossy widescreen display with support for millions of colors'],
    [1400,              1401,                   5,          799,        1,          'Iphone X Storage capacity 128 GB'],
    [1400,              1402,                   7,          899,        0,          'Iphone X Storage capacity 256 GB'],
    [1500,              1501,                   8,          399,        0,          'Iphone 7 Storage capacity 64 GB'],
    [1500,              1502,                   9,          499,        1,          'Iphone 7 Storage capacity 32 GB'],
    [1600,              1601,                   4,          599,        0,          'Iphone 8 Storage capacity 64 GB '],
    [1600,              1602,                   7,          699,        1,          'Iphone 8 Storage capacity 128 GB'],
    [1700,              1701,                   20,         899,        1,          'Ipad Air 9.7-inch (diagonal) LED-backlit Multi-Touch display with IPS technology'],
    [1700,              1702,                   9,          999,        0,          'Ipad Air 12-inch (diagonal) LED-backlit Multi-Touch display with IPS technology'],
    [1800,              1801,                   40,         499,        1,          'Ipad Mini 7.9-inch (diagonal) LED-backlit Multi-Touch display with IPS technology'],
    [1800,              1802,                   100,        599,        1,          'Ipad Mini 10-inch (diagonal) LED-backlit Multi-Touch display with IPS technology'],
    [1900,              1901,                   4,          650,        1,          'ESC4000 G3 Server with 2U 4-GPU Hybrid Computing Power with Mass Storage Capability'],
    [1900,              1902,                   6,          750,        0,          'ESC8000 G4 Server with High-density 4U GPU server support 8 GPUs'],
    [2000,              2001,                   1,          450,        0,          'RS100-E8-PI2 Server with Smart compact 1U server'],
    [2000,              2002,                   2,          550,        1,          'RS300-E9-PI4 Server with Flagship Model with Versatile Expandability'],
    [2100,              2101,                   7,          1250,       1,          'Dell XPS 13 PC with 13.3-inch Intel Core i5-8250U. 8GB memory/128GB SSD'],
    [2100,              2102,                   1,          1650,       0,          'Dell XPS 15 PC with 15.6-inch Intel Core i5-7300HQ. 8GB memory/256GB SSD'],
    [2200,              2201,                   10,         600,        0,          'Dell Inspiron 15 PC with 15.6-inch Full HD. Intel Core i5-8250U. 8GB memory/1TB HDD'],
    [2200,              2202,                   50,         700,        1,          'Dell Inspiron 24 PC with 23.8-in Full HD. Intel Core i5-7200U. 8GB memory/1TB SATA'],
    [2300,              2301,                   40,         15,         0,          'Monoprice Ultra Slim 24Hz High Speed HDMI Cable, 10Gbps, 36AWG, YUV 4:2:0, 6ft, Black'],
    [2300,              2302,                   30,         25,         1,          'Monoprice Ultra Slim 60Hz High Speed HDMI Cable, 18Gbps, 40AWG, YUV 6:4:0, 8ft, Black'],
    [2400,              2401,                   1,          10,         0,          'Monoprice Commercial 32Hz High Speed HDMI Cable, 10Gbps, 24AWG, CL2, 6ft, Black'],
    [2400,              2402,                   10,         20,         0,          'Monoprice Commercial 80Hz High Speed HDMI Cable, 18Gbps, 40AWG, CL2, 8ft, Black'],
    [2500,              2501,                   1,          250,        1,          '1000XM1 Wireless Headphones 20 Hzñ20,000 Hz (44 kHz Sampling)/ 20 Hzñ40,000 Hz (LDAC 96 kHz Sampling, 990 kbps)'],
    [2500,              2502,                   20,         350,        1,          '1200XM3 Wireless Headphones 40 Hzñ40,000 Hz (54 kHz Sampling)/40 Hzñ60,000 Hz (LDAC 120 kHz Sampling, 800 kbps)'],
    [2600,              2601,                   9,          800,        0,          'Sony IER-M7 In-ears Headphone. Driver Unit by Quad-balanced armature. Frequency Response 5 Hzñ20,000 Hz'],
    [2600,              2602,                   60,         900,        1,          'Sony IER-M9 In-ears Headphone. Driver Unit by Penta Balanced Armature. Frequency Response 10 Hzñ40,000 Hz'],
];