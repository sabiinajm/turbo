const data = [
    {
        id: "1",
        brand: "Abarth",
        model: "Seltos",
        banType: "Offroader / SUV",
        odometer: 30000,
        odometerUnit: "km",
        price: 44000,
        currency: "AZN",
        year: "2005",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F11%2F11%2F19%2F41%2F5f34c8eb-5138-4d0c-b78e-8c817d98aa5f%2F52522_Mu2ZZs1LqQkRDJpgK-R_xw.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "2",
        brand: "Audi",
        model: "A5",
        banType: "Sedan",
        odometer: 165000,
        odometerUnit: "km",
        price: 16000,
        currency: "USD",
        year: "2013",
        credit: true,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2022%2F08%2F31%2F23%2F10%2F15%2F729c8b30-ea56-45d3-bdf7-f8a7b0e9e950%2F3015_eyJujDX3UzCcNboINLPl_g.jpg",
        ],
        city: "Masallı",
        engine: 1.5,
    },
    {
        id: "3",
        brand: "Toyota",
        model: "Camry",
        banType: "Sedan",
        odometer: 191000,
        odometerUnit: "km",
        price: 17300,
        currency: "AZN",
        year: "2007",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2022%2F12%2F22%2F10%2F26%2F59%2F9f754715-d306-49f2-b2e2-60ab36f771e6%2F80870_wrsWRRQ-A4ySXmcF4jOpXg.jpg",
        ],
        city: "Ağdam",
        engine: 1.5,
    },
    {
        id: "4",
        brand: "Ford",
        model: "Transit",
        banType: "Karvan",
        odometer: 11000,
        odometerUnit: "km",
        price: 44500,
        currency: "USD",
        year: "2008",
        credit: true,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2022%2F09%2F02%2F17%2F28%2F48%2Fa0bc3142-1854-48f9-9c81-ff7d7010c1ae%2F59959_CCv7BAr0Tlz1x7lQiFAsQA.jpg",
        ],
        city: "Naftalan",
        engine: 1.5,
    },
    {
        id: "5",
        brand: "Bestune",
        model: "T77",
        banType: "Offroader / SUV",
        odometer: 0,
        odometerUnit: "km",
        price: 45900,
        currency: "AZN",
        year: "2022",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2022%2F09%2F19%2F17%2F33%2F45%2F027df0e9-c5df-46a1-8428-2a356ee17d45%2F44832_yspkMx-Q-VQPULaAOI_MSw.jpg",
        ],
        city: "Oğuz",
        engine: 1.5,
    },
    {
        id: "6",
        brand: "Honggi",
        model: "H9",
        banType: "Sedan",
        odometer: 0,
        odometerUnit: "km",
        price: 94000,
        currency: "AZN",
        year: "2005",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2022%2F04%2F19%2F15%2F59%2F38%2F716b705f-e564-4d55-995a-7762e6881f4c%2F5883_vLXDlraa-zAkIkuXUdl05w.jpg",
        ],
        city: "Qax",
        engine: 1.5,
    },
    {
        id: "7",
        brand: "Ford",
        model: "Fusion",
        banType: "Sedan",
        odometer: 141622,
        odometerUnit: "km",
        price: 19500,
        currency: "AZN",
        year: "2015",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F15%2F18%2F37%2F46fbb03a-0cd9-4409-bbc6-03023e588329%2F67200_jmTFoB8S36kCqexBERvuhA.jpg",
        ],
        city: "Gədəbəy",
        engine: 1.5,
    },
    {
        id: "8",
        brand: "Ford",
        model: "Fusion",
        banType: "Sedan",
        odometer: 129000,
        odometerUnit: "km",
        price: 25900,
        currency: "AZN",
        year: "2017",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F18%2F08%2F03%2F20fc5e31-1f10-4b83-ade8-2d513db1c746%2F67209_O84rpgQMDkok2-nwStiHpg.jpg",
        ],
        city: "Gəncə",
        engine: 1.5,
    },
    {
        id: "9",
        brand: "Ford",
        model: "Fusion",
        banType: "Sedan",
        odometer: 46000,
        odometerUnit: "km",
        price: 21200,
        currency: "USD",
        year: "2020",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2022%2F11%2F11%2F19%2F52%2F19%2F56291fd3-453f-426f-a911-3ca4f2e26362%2F17663_stveq78AA4WtPo3oyvVbHA.jpg",
        ],
        city: "Baki",
        engine: 1.5,
    },
    {
        id: "10",
        brand: "Ford",
        model: "Fusion",
        banType: "Sedan",
        odometer: 24945,
        odometerUnit: "km",
        price: 18500,
        currency: "AZN",
        year: "2015",
        credit: true,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F19%2F14%2F59%2F27%2F530eae46-d07d-4abc-bacb-de36d3088f0f%2F64922_Iu72BGd2C_OFe3WxVk-qGQ.jpg",
        ],
        city: "Ağcabədi",
        engine: 1.5,
    },
    {
        id: "11",
        brand: "Kia",
        model: "Seltos",
        banType: "Offroader / SUV",
        odometer: 30000,
        odometerUnit: "km",
        price: 40000,
        currency: "AZN",
        year: "2005",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2022%2F10%2F20%2F20%2F19%2F37%2Ff0d40936-67d4-47b2-8f88-39e95c546ae3%2F57379_yzPNLn7TAwj6RDByWKgvOA.jpg",
        ],
        city: "Baki",
        engine: 1.5,
    },
    {
        id: "12",
        brand: "Ford",
        model: "Fusion",
        banType: "Sedan",
        odometer: 192000,
        odometerUnit: "km",
        price: 23500,
        currency: "AZN",
        year: "2014",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F15%2F48%2F00%2F097e698b-cbe7-4539-ab25-9a13a2a753fd%2F75247_xWTTEaAst4sLzUzIUkthPg.jpg",
        ],
        city: "Ağdaş",
        engine: 1.5,
    },
    {
        id: "13",
        brand: "Ford",
        model: "Fusion",
        banType: "Sedan",
        odometer: 20500,
        odometerUnit: "km",
        price: 42000,
        currency: "AZN",
        year: "2015",
        credit: true,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F20%2F08%2F29%2F52caefc7-1570-4c7c-a077-fd1f816203cb%2F64916_MHdPUxu1eQ3kLAtY4hEzYg.jpg",
        ],
        city: "Ağsu",
        engine: 1.5,
    },
    {
        id: "14",
        brand: "Fusion",
        model: "Ford",
        banType: "Sedan",
        odometer: 30000,
        odometerUnit: "km",
        price: 40000,
        currency: "AZN",
        year: "2005",
        credit: true,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F06%2F18%2F51%2F58%2Fc79abd63-a69c-48eb-b071-37506b868231%2F57686_CzbKH3fGBbBdGyq3D-qstQ.jpg",
        ],
        city: "Ağdaş",
        engine: 1.5,
    },
    {
        id: "15",
        brand: "Ford",
        model: "Sedan",
        banType: "Sedan",
        odometer: 122000,
        odometerUnit: "km",
        price: 40000,
        currency: "AZN",
        year: "2015",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F28%2F22%2F00%2F43%2F37fc61b4-f0e5-46c2-af9d-80f0b15b12c1%2F67189_ktr5R2gTZl44Bt3WKDgx2w.jpg",
        ],
        city: "Bərdə",
        engine: 1.5,
    },
    {
        id: "16",
        brand: "Ford",
        model: "Sedan",
        banType: "Sedan",
        odometer: 122000,
        odometerUnit: "km",
        price: 40000,
        currency: "AZN",
        year: "2015",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F28%2F22%2F00%2F43%2F37fc61b4-f0e5-46c2-af9d-80f0b15b12c1%2F67189_ktr5R2gTZl44Bt3WKDgx2w.jpg",
        ],
        city: "Bərdə",
        engine: 1.5,
    },
    {
        id: "17",
        brand: "Ford",
        model: "Sedan",
        banType: "Sedan",
        odometer: 12000,
        odometerUnit: "km",
        price: 40000,
        currency: "EUR",
        year: "2015",
        credit: true,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F15%2F32%2F14%2F772966ba-5666-475a-a372-f12bf29a6393%2F78864_UB3_bVH_R5hoI0WN_uPsDQ.jpg",
        ],
        city: "Bərdə",
        engine: 1.5,
    },
    {
        id: "18",
        brand: "Ford",
        model: "Fusion",
        banType: "Sedan",
        odometer: 10000,
        odometerUnit: "km",
        price: 33000,
        currency: "AZN",
        year: "2005",
        credit: true,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F21%2F06%2F21%2F7fc2989d-5606-4bba-84d5-91a7c1e3c11b%2F86601_iBRqpWaL3FFHzWvi-4ZGNQ.jpg",
        ],
        city: "Yevlax",
        engine: 1.5,
    },
    {
        id: "19",
        brand: "Ford",
        model: "Fusion",
        banType: "Sedan",
        odometer: 30000,
        odometerUnit: "km",
        price: 40000,
        currency: "EUR",
        year: "2005",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F12%2F19%2F55%2F07%2F9e2ccf81-d944-4b2f-8e63-a63bb368dfeb%2F8520_gtkNyAHKA6hUsNhuKMZOxw.jpg",
        ],
        city: "Göyçay",
        engine: 1.5,
    },
    {
        id: "20",
        brand: "Ford",
        model: "Fusion",
        banType: "Sedan",
        odometer: 50000,
        odometerUnit: "km",
        price: 12000,
        currency: "USD",
        year: "2005",
        credit: true,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F06%2F13%2F55%2F32%2Facf4c052-5a2e-4bd0-a0df-e28ecc595151%2F11719_z5jP8sffJjJ_qsKGBXbQsw.jpg",
        ],
        city: "İmişli",
        engine: 1.5,
    },
    {
        id: "21",
        brand: "Mercedes",
        model: "A 140",
        banType: "Hetçbek",
        odometer: 50000,
        odometerUnit: "km",
        price: 12000,
        currency: "USD",
        year: "2005",
        credit: true,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F19%2F39%2F48%2Fbae4dd1b-0f4e-4894-9e9b-7d4ed873ab27%2F67204_3_Uie01KEoSx4Ki0QWYwnA.jpg",
        ],
        city: "Bərdə",
        engine: 1.5,
    },
    {
        id: "22",
        brand: "Chevrolet",
        model: "Gatsby",
        banType: "Kabriolet",
        odometer: 16900,
        odometerUnit: "km",
        price: 126000,
        currency: "USD",
        year: "1986",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2022%2F09%2F16%2F12%2F50%2F42%2Febf8e8a9-4b9e-42d1-bb0c-725555a056e1%2F54915_qtOrHDVrjjW3-GNgDyN8vg.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "23",
        brand: "Jaguar",
        model: "F-Type R",
        banType: "Kupe",
        odometer: 23000,
        odometerUnit: "km",
        price: 53000,
        currency: "USD",
        year: "2014",
        credit: true,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2022%2F07%2F08%2F11%2F07%2F31%2Fd5fce961-38e1-47dd-8cf2-0eafc47ddb85%2F48187_u9isVaR_H7KHZwjuTS97bA.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "24",
        brand: "Mercedes",
        model: "E 430",
        banType: "Kupe",
        odometer: 20200,
        odometerUnit: "km",
        price: 22000,
        currency: "AZN",
        year: "2000",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F18%2F47%2F06%2F92202a2f-1f27-453f-a37e-c03b988d1187%2F49755_qZklKVXHkSfjWtrA_iHn_A.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "25",
        brand: "C.Moto",
        model: "CM250R- HY",
        banType: "Motosiklet",
        odometer: 0,
        odometerUnit: "km",
        price: 5400,
        currency: "AZN",
        year: "2023",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F16%2F42%2F46%2Fb60abf3c-aff7-450d-b793-bf93ceff3a06%2F15660_QvgVQpBtt9j4-9bpnj5N8Q.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "26",
        brand: "Tayota",
        model: "Sienna",
        banType: "Minivan",
        odometer: 22000,
        odometerUnit: "km",
        price: 51400,
        currency: "USD",
        year: "2020",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2022%2F12%2F29%2F00%2F03%2F08%2F2ac930d3-3d5a-4b19-94fb-b63850ff5693%2F15334_aQbJ3Ea3Oz_WMOo_hHKCAg.jpg",
        ],
        city: "Horadiz",
        engine: 1.5,
    },
    {
        id: "27",
        brand: "Tayota",
        model: "Prius",
        banType: "Liftbek",
        odometer: 188293,
        odometerUnit: "km",
        price: 13900,
        currency: "EUR",
        year: "2020",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F24%2F14%2F33%2F40%2F0f9b3be6-4ae5-417a-bcf1-db0f39927d4e%2F33485_P0YBt9TmP9pEv29rCuhWLg.jpg",
        ],
        city: "İsmayıllı",
        engine: 1.5,
    },
    {
        id: "28",
        brand: "Porsche",
        model: "Panamera GTS",
        banType: "Liftbek",
        odometer: 188293,
        odometerUnit: "km",
        price: 55000,
        currency: "EUR",
        year: "2020",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F02%2F01%2F01%2F26%2F17%2Ffb77794e-9d37-424e-944d-3b233bc03467%2F12003_RjupQqZAh9kZFu-IaHqJ7g.jpg",
        ],
        city: "Şahbuz",
        engine: 1.5,
    },
    {
        id: "29",
        brand: "Paz",
        model: "672",
        banType: "Avtobus",
        odometer: 50000,
        odometerUnit: "km",
        price: 12000,
        currency: "USD",
        year: "2005",
        credit: true,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F23%2F21%2F49%2F47%2F18227380-ca87-4ecc-8497-3c972bce2db1%2F42127_wKRyc3J6-wogJe-WZMY-ug.jpg",
        ],
        city: "İmişli",
        engine: 1.5,
    },
    {
        id: "30",
        brand: "Ferrari",
        model: "California",
        banType: "Rodster",
        odometer: 20000,
        odometerUnit: "km",
        price: 135000,
        currency: "USD",
        year: "2017",
        credit: true,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2022%2F12%2F28%2F15%2F40%2F48%2Fb18d5c9e-58d7-4e2e-9bba-1c29cbce9940%2F61425_r8Og48iy5Jr9GvOTtAnnyQ.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "31",
        brand: "Mercedes",
        model: "E 280",
        banType: "Sedan",
        odometer: 129000,
        odometerUnit: "km",
        price: 19700,
        currency: "AZN",
        year: "2009",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F31%2F21%2F26%2F41%2Fa8168d7c-d02e-495f-8f01-69fcdc5e3e03%2F11997_tG1Qr36Aqkf171mt0oZG7Q.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "32",
        brand: "Mercedes",
        model: "E 200",
        banType: "Sedan",
        odometer: 315000,
        odometerUnit: "km",
        price: 14000,
        currency: "AZN",
        year: "2001",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2023%2F02%2F01%2F00%2F51%2F52%2F5638fb6b-7249-4f46-abd0-aa1efc451203%2F15643_AMLCTJrCWlvBJ6SXlF8fpg.jpg",
        ],
        city: "Sumqayıt",
        engine: 1.5,
    },
    {
        id: "33",
        brand: "Mercedes",
        model: "C 240",
        banType: "Sedan",
        odometer: 451000,
        odometerUnit: "km",
        price: 9500,
        currency: "AZN",
        year: "1997",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2023%2F02%2F01%2F00%2F50%2F33%2Fd092e0d3-04c1-4af7-a730-c240c35f5f7d%2F15649_bymZBq9rqL0M4TLjYtXR4A.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "34",
        brand: "Mercedes",
        model: "A 170",
        banType: "Hetçbek",
        odometer: 199000,
        odometerUnit: "km",
        price: 10200,
        currency: "AZN",
        year: "2006",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F30%2F20%2F06%2F23%2F76cef983-6b3b-47b8-a58d-dfb3cf469b5d%2F75221_xUr0C4Z--56j6RIijVBWVA.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "35",
        brand: "Mercedes",
        model: "Actros 1841",
        banType: "Dartqı",
        odometer: 1300000,
        odometerUnit: "km",
        price: 67500,
        currency: "AZN",
        year: "2008",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2022%2F11%2F09%2F08%2F03%2F05%2Fcabbc910-8026-456f-a642-62ab99fc313e%2F10369_bNrqvfrJMy63hz0DwhXPcg.jpg",
        ],
        city: "Lənkəran",
        engine: 1.5,
    },
    {
        id: "36",
        brand: "Mercedes",
        model: "G 63 AMG",
        banType: "Offroader / SUV",
        odometer: 28000,
        odometerUnit: "km",
        price: 90200,
        currency: "AZN",
        year: "2016",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F31%2F20%2F36%2F16%2Ffb49abb0-fdf6-4595-87b0-27bdd3c3d226%2F12009_q1FoKTnpPA3uE3dtRcZZUA.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "37",
        brand: "Mercedes",
        model: "200 D",
        banType: "Sedan",
        odometer: 552000,
        odometerUnit: "km",
        price: 5200,
        currency: "AZN",
        year: "1990",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F19%2F25%2F15%2F3aa9741d-4cc3-4ea0-9c3f-66ae5de0516b%2F6316_s0p7GRbRLVyaXdPugbuHeA.jpg",
        ],
        city: "Saatlı",
        engine: 1.5,
    },
    {
        id: "38",
        brand: "Mercedes",
        model: "0403",
        banType: "Avtobus",
        odometer: 700000,
        odometerUnit: "km",
        price: 110000,
        currency: "AZN",
        year: "2000",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F21%2F15%2F25%2F13%2F02798cb4-1129-4629-93af-b6dccb089966%2F78886_JqpeH6a5xab8QHW6E7dXKg.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "39",
        brand: "Mercedes",
        model: "GLC 300 Coupe",
        banType: "Kupe",
        odometer: 7000,
        odometerUnit: "km",
        price: 72000,
        currency: "USD",
        year: "2021",
        credit: true,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F12%2F12%2F32%2F34%2Fef66aacc-979f-4824-9c38-4151faad457e%2F45824__18habOQ883XXQctAU0TAg.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "40",
        brand: "Mercedes",
        model: "AMG GT 53",
        banType: "Sedan",
        odometer: 0,
        odometerUnit: "km",
        price: 210000,
        currency: "EUR",
        year: "2023",
        credit: true,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2022%2F11%2F24%2F15%2F43%2F27%2Ff071d240-bc97-412c-a94a-bd3d676a51b2%2F23828_xAXUnAgmfcF8tuCOsfkz8Q.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "41",
        brand: "Mercedes",
        model: "170 V",
        banType: "Kupe",
        odometer: 82000,
        odometerUnit: "km",
        price: 500000,
        currency: "AZN",
        year: "1938",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2022%2F10%2F27%2F14%2F39%2F36%2F923ef17d-e1f9-4149-9e94-f925cf7661b7%2F42871_umKrn-lPv1BfkzuD5arziA.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "42",
        brand: "Jaguar",
        model: "XF",
        banType: "Sedan",
        odometer: 95000,
        odometerUnit: "km",
        price: 35000,
        currency: "AZN",
        year: "2014",
        credit: false,
        barter: true,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F28%2F12%2F48%2F02%2Fe5c1b65a-c97f-4f94-ab4d-fcac497b20b6%2F67186_iILaSiss0FC-yQLMTjYR9A.jpg",
        ],
        city: "Sumqayıt",
        engine: 1.5,
    },
    {
        id: "43",
        brand: "Jaguar",
        model: "S-Type",
        banType: "Sedan",
        odometer: 190000,
        odometerUnit: "km",
        price: 17000,
        currency: "AZN",
        year: "2007",
        credit: false,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F30%2F20%2F01%2F36%2Fb8325e8f-b0b1-4423-8163-59ab513c0445%2F49759_qjtKYlmSfvuA_6JFNFa8AQ.jpg",
        ],
        city: "Gəncə",
        engine: 1.5,
    },
    {
        id: "44",
        brand: "Jaguar",
        model: "XF",
        banType: "Sedan",
        odometer: 9500,
        odometerUnit: "km",
        price: 58000,
        currency: "USD",
        year: "2019",
        credit: true,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2021%2F02%2F04%2F11%2F55%2F52%2Ff3ddd4c9-1600-4d6d-b34f-5853f3c1ff71%2F19864_8RtK5APm1te6PSMZ3o2MLg.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "45",
        brand: "Jaguar",
        model: "F-Type R,",
        banType: "Sedan",
        odometer: 500,
        odometerUnit: "km",
        price: 60000,
        currency: "EUR",
        year: "2020",
        credit: true,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/f710x568/2022%2F12%2F31%2F11%2F03%2F22%2Fb774f69d-3dc8-45d8-bf74-7fe3b1e68012%2F16508_ZEyGXYpx-MxvNSzE3M3s7A.jpg",
        ],
        city: "Bakı",
        engine: 1.5,
    },
    {
        id: "46",
        brand: "Acura",
        model: "MDX",
        banType: "Offroader / SUV",
        odometer: 500,
        odometerUnit: "km",
        price: 60000,
        currency: "EUR",
        year: "2020",
        credit: true,
        barter: false,
        images: [
            "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F13%2F41%2F14%2F30be4e7e-c9ac-455d-8616-616f096d6da7%2F71593_f9yNl7lW4FO-spgOift6dw.jpg",
        ],
        city: "Mingecevir",
        engine: 1.5,
    }
]

document.getElementById('dropdownNavbarLink').addEventListener('click', function () {
    var dropdown = document.getElementById('dropdownNavbar')
    dropdown.classList.toggle('hidden')
});

document.getElementById('dropdownNavbarLink2').addEventListener('click', function () {
    var dropdown = document.getElementById('dropdownNavbar2')
    dropdown.classList.toggle('hidden')
});

const card = document.getElementById('card')
function displayCars(cars) {
    let kod = ''
    cars.forEach(car => {
        kod += ` 
            <div class="w-48 border basis-1/2 sm:basis-1/3 lg:basis-1/5 border-gray-200 rounded-lg overflow-hidden shadow-lg mx-1 mb-8">
                <div class="img-car">
                    <img src="${car.images[0]}" class="h-48 w-full object-cover" alt="${car.brand}">
                </div>
                <div class="info pb-2 pl-2">
                    <h2 class="font-bold text-lg">${car.price} ${car.currency}</h2>
                    <p>${car.brand} ${car.model}</p>
                    <p>${car.year}, ${car.engine}L, ${car.odometer} ${car.odometerUnit}</p>
                    <p class="text-gray-400">${car.city}, bugün 18:26</p>
                </div>
            </div>`
    })
    card.innerHTML = kod
}

displayCars(data)

const brandSet = new Set()
const modelSet = new Set()
const citySet = new Set()
const currencySet = new Set()
const banSet = new Set()

const markaSelect = document.getElementById("markaSelect")
const modelSelect = document.getElementById("modelSelect")
const citySelect = document.getElementById("citySelect")
const currencySelect = document.getElementById("currencySelect")
const banSelect = document.getElementById("banSelect")

data.forEach(car => {
    brandSet.add(car.brand)
    modelSet.add(car.model)
    citySet.add(car.city)
    currencySet.add(car.currency)
    banSet.add(car.banType)
});

const marka = Array.from(brandSet)
const model = Array.from(modelSet)
const city = Array.from(citySet)
const currency = Array.from(currencySet)
const ban = Array.from(banSet)

function addOptionsToSelect(selectElement, optionsArray, placeholder) {
    selectElement.innerHTML = `<option disabled selected>${placeholder}</option>`
    optionsArray.forEach(option => {
        selectElement.innerHTML += `<option>${option}</option>`;
    });
}

function addBrandOp() {
    addOptionsToSelect(markaSelect, marka, 'Brand')
    addOptionsToSelect(modelSelect, model, 'Model')
    addOptionsToSelect(citySelect, city, 'City')
    addOptionsToSelect(currencySelect, currency, currency[0])
    addOptionsToSelect(banSelect, ban, 'Ban')
}
addBrandOp()


function filterCars() {
    let selectedMarka = markaSelect.value
    let selectedModel = modelSelect.value
    let selectedCity = citySelect.value
    let selectedCurrency = currencySelect.value
    let selectedBan = banSelect.value

    let filteredCars = data

    if (selectedMarka && selectedMarka !== 'Brand') {
        filteredCars = filteredCars.filter(car => car.brand === selectedMarka)
    }
    if (selectedModel && selectedModel !== 'Model') {
        filteredCars = filteredCars.filter(car => car.model === selectedModel)
    }
    if (selectedCity && selectedCity !== 'City') {
        filteredCars = filteredCars.filter(car => car.city === selectedCity)
    }
    if (selectedCurrency && selectedCurrency !== currency[0]) {
        filteredCars = filteredCars.filter(car => car.currency === selectedCurrency)
    }
    if (selectedBan && selectedBan !== 'Ban') {
        filteredCars = filteredCars.filter(car => car.banType === selectedBan)
    }

    displayCars(filteredCars);
}

function clearFilter(){
    displayCars(data)
    addBrandOp()
}