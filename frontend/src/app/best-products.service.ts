import { Injectable } from '@angular/core';
import { BestProducts } from './model/BestProducts';

@Injectable({
  providedIn: 'root',
})
export class BestProductsService {
  list1: BestProducts[] = [
    {
      title: 'Apple iPhone 13 (128GB, Blue) [Locked] + Carrier Subscription',
      id: '1',
      desc: '6.1-inch Super Retina XDR display, Cinematic mode adds shallow depth of field and shifts focus automatically in your videos,Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording,12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording,A15 Bionic chip for lightning-fast performance,Up to 19 hours of video playback,Durable design with Ceramic Shield,Industry-leading IP68 water resistance,5G capable,iOS 15 packs new features to do more with iPhone than ever before.',
      originalPrice: '',
      currentPrice: ' NA',
      image1: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._FMwebp__.jpg',
      image2: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._FMwebp__.jpg',
      image3: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._FMwebp__.jpg',
      image4: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._FMwebp__.jpg',
      image5: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._FMwebp__.jpg',
      image6: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._FMwebp__.jpg',
      clickURL:
        'https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B09G9F5RH5/ref=sr_1_1_sspa?crid=5UG1Z78RM1YX&amp;keywords=apple+iphone&amp;qid=1694364975&amp;sprefix=apple+ip%25252Caps%25252C147&amp;sr=8-1-spons&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;psc=1&amp;_encoding=UTF8&amp;tag=ryzlink02-20&amp;linkCode=ur2&amp;linkId=e088f94e170c5ea5580b55099b510d99&amp;camp=1789&amp;creative=9325&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=2de98194db2f7c10009905cd9585643e&camp=1789&creative=9325',
    },
    {
      title:
        'Apple iPhone 13 Pro Max (128GB, Graphite) [Locked] + Carrier Subscription',
      id: '2',
      desc: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel,Cinematic mode adds shallow depth of field and shifts focus automatically in your videos,Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording,12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording,A15 Bionic chip for lightning-fast performance,Up to 28 hours of video playback, the best battery life ever in an iPhone,Durable design with Ceramic Shield,Industry-leading IP68 water resistance,5G capable,iOS 15 packs new features to do more with iPhone than ever before',
      originalPrice: '',
      currentPrice: ' NA',
      image1: 'https://m.media-amazon.com/images/I/61IJBsHm97L._FMwebp__.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Apple-iPhone-Graphite-Carrier-Subscription/dp/B09G9SKWC9/ref=sr_1_2_sspa?crid=5UG1Z78RM1YX&amp;keywords=apple+iphone&amp;qid=1694364975&amp;sprefix=apple+ip%252Caps%252C147&amp;sr=8-2-spons&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;psc=1&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=dac58b5fab642902d695ec6e0688ee9e&camp=1789&creative=9325',
    },
    {
      title:
        'Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Starlight',
      id: '3',
      desc: 'IMPRESSIVELY BIG, IMPOSSIBLY THIN — The 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. The durable 100 percent recycled aluminum enclosure is strikingly thin and light.SUPERCHARGED BY M2 — Get more done faster with a powerful 8-core CPU, 10-core GPU, and up to 24GB of unified memory.UP TO 18 HOURS OF BATTERY LIFE — Go all day with the power-efficient performance of the Apple M2 chip. (Battery life varies by use and configuration. See apple.com/batteries for more information.)SPACIOUS, BEAUTIFUL DISPLAY — The high-resolution, 15.3-inch Liquid Retina display features 500 nits of brightness, P3 wide color, and support for one billion colors for vibrant images and incredible detail. (The display on the 15-inch MacBook Air has rounded corners at the top. When measured as a standard rectangular shape, the screen is 15.3 inches diagonally; actual viewable area is less.)',
      originalPrice: '',
      currentPrice: '1,088.01',
      image1: 'https://m.media-amazon.com/images/I/81UFHe-hH5L._AC_SX679_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Apple-2023-MacBook-Laptop-chip/dp/B0C7686169/ref=sr_1_2?crid=1FXQ7PHCK5LXO&amp=undefined&keywords=macbook&qid=1694365296&sprefix=mac%252Caps%252C117&sr=8-2&ufe=app_do%253Aamzn1.fos.765d4786-5719-48b9-b588-eab9385652d5&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=c53dba0011e3232001e0796d57ebb7a2&camp=1789&creative=9325&th=1',
    },
    {
      title: '',
      id: '4',
      desc: '',
      originalPrice: '',
      currentPrice: '',
      image1: '../../../assets/laptop.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL: '',
    },
    {
      title:
        'Apple 2023 MacBook Pro Laptop M2 Pro chip with 10‑core CPU and 16‑core GPU: 14.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Space Gray',
      id: '5',
      desc: 'SUPERCHARGED BY M2 PRO OR M2 MAX — Take on demanding projects with the M2 Pro or M2 Max chip. M2 Pro has up to 12 CPU cores, up to 19 GPU cores, and up to 32GB unified memory. M2 Max has 12 CPU cores, up to 38 GPU cores, and up to 96GB unified memory.UP TO 18 HOURS OF BATTERY LIFE — Go all day thanks to the power-efficient design of the M2 Pro or M2 Max chip. And the MacBook Pro laptop delivers exceptional performance whether it’s running on battery or plugged in.FULLY COMPATIBLE — All your pro apps run lightning fast — including Adobe Creative Cloud,Xcode,Affinity Designer, Microsoft 365, and many of your favorite iPhone and iPad apps.BEAUTIFUL PRO DISPLAY — The 14.2-inch Liquid Retina XDR display features Extreme Dynamic Range, over 1000 nits of brightness for stunning HDR content,and pro reference modes for doing your best work on the go.ADVANCED CAMERA AND AUDIO — Look sharp and sound great with a 1080p FaceTime HD camera, a studio-quality three-mic array, and a six-speaker sound system with Spatial Audio.',
      originalPrice: '',
      currentPrice: '1,947.99',
      image1:
        'https://m.media-amazon.com/images/I/61lYIKPieDL.__AC_SY445_SX342_QL70_FMwebp_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Apple-MacBook-Laptop-10%25E2%2580%2591core-16%25E2%2580%2591core/dp/B0BSHDVBXZ/ref=sr_1_3?crid=1FXQ7PHCK5LXO&amp;keywords=macbook&amp;qid=1694365296&amp;sprefix=mac%252Caps%252C117&amp;sr=8-3&amp;ufe=app_do%253Aamzn1.fos.17f26c18-b61b-4ce9-8a28-de351f41cffb&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=8f75c6467202915947963ca22b51b30c&camp=1789&creative=9325',
    },
    {
      title:
        'Apple 2020 MacBook Air Laptop M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver',
      id: '6',
      desc: 'All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.Stunning Display – With a 13.3 inch Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.Why Mac – Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use right out of the box. Mac is designed to let you work, play, and create like never before.Simply Compatible – All your existing apps work, including Adobe Creative Cloud, Microsoft 365, and Google Drive. Plus you can use your favorite iPhone and iPad apps directly on macOS. Altogether you’ll have access to the biggest collection of apps ever for Mac. All available on the App Store.',
      originalPrice: '999',
      currentPrice: '949.99',
      image1: 'https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SX679_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5KWB9H/ref=sr_1_4?crid=1FXQ7PHCK5LXO&amp;keywords=macbook&amp;qid=1694365296&amp;sprefix=mac%252Caps%252C117&amp;sr=8-4&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=0b7befe69d65fe952eeddaf9b2ee514f&camp=1789&creative=9325',
    },
    {
      title:
        'Apple 2021 MacBook Pro (16-inch, M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Silver',
      id: '7',
      desc: 'Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever,Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games,16-core Neural Engine for up to 5x faster machine learning performance,Longer battery life, up to 21 hours,Up to 64GB of unified memory so everything you do is fast and fluid,Up to 8TB of superfast SSD storage launches apps and opens files in an instant',
      originalPrice: '2,398.0',
      currentPrice: '2699.00',
      image1:
        'https://m.media-amazon.com/images/I/61Y30DpqRVL.__AC_SY445_SX342_QL70_FMwebp_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Apple-MacBook-16-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQML3NL/ref=sr_1_6?crid=1FXQ7PHCK5LXO&keywords=macbook&qid=1694365296&sprefix=mac%2Caps%2C117&sr=8-6&ufe=app_do%3Aamzn1.fos.17f26c18-b61b-4ce9-8a28-de351f41cffb',
    },
    {
      title: '',
      id: '8',
      desc: '',
      originalPrice: '',
      currentPrice: '',
      image1: '../../../assets/laptop.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL: '',
    },
    {
      title:
        'ASUS VivoBook 15X OLED Laptop, 15.6 OLED Display, AMD Ryzen 7 5800H CPU, AMD Radeon GPU, 16GB RAM, 512GB SSD, Windows 11 Home, Quiet Blue, M1503QA-ES74',
      id: '9',
      desc: '15.6” FHD (1920 x 1080) OLED 16:9 aspect ratio display with ultra-slim NanoEdge bezels,0.2ms response time, 600nits peak brightness, 100% DCI-P3 color gamut, 1,000,000:1 Contrast ratio, VESA CERTIFIED Display HDR True Black 600,Latest AMD Ryzen 7 5800H Mobile Processor (8-core/16-thread, 20MB cache, up to 4.4 GHz max boost) and AMD Radeon Graphics,Fast storage and memory featuring 512GB M.2 NVMe PCIe 3.0 SSD and 8GB DDR4 on board + 8GB DDR4 SO-DIMM RAM, Windows 11 Home,Extensive connectivity with 2x USB 3.2 Gen 1 Type-C, USB 2.0 Type A, 3.5mm Combo Audio Jack, Wi-Fi 6(802.11ax)+Bluetooth 5.0 (Dual band) 2*2 (*USB transfer speed may vary. Learn more at ASUS.com)',
      originalPrice: '',
      currentPrice: ' NA',
      image1:
        'https://m.media-amazon.com/images/I/71a8kfFtpXL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/ASUS-VivoBook-Display-Windows-M1503QA-ES74/dp/B0B48LD2L1/ref=sr_1_3?crid=2EXPZ5FUNSRTE&amp;keywords=laptops&amp;qid=1694365443&amp;refinements=p_36%253A2421888011%252Cp_n_deal_type%253A23566065011&amp;rnid=23566063011&amp;s=pc&amp;sprefix=laptops%252Caps%252C124&amp;sr=1-3&amp;ufe=app_do%253Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=c06f4ba0112bd194fd5d41a1bacc8a0d&camp=1789&creative=9325',
    },
    {
      title:
        'HP Pavilion x360 2-in-1 Laptop, 14 inch FHD Touch Screen, Intel Core i5-1135G7, Windows 11 Pro (16GB RAM | 512GB SSD)Visit the HP Store',
      id: '10',
      desc: '11th Generation Intel Core i5-1135G7 Processor】Brings the perfect combination of features to make you unstoppable. Get things done fast with high performance, instant responsiveness and best-in-class connectivity. 【Intel Iris Xe Graphics】Impressive performance for creating, gaming, and entertainment. A new level of graphics performance and crisp, stunning visuals–with the convenience of a thin & light laptop.14 inch Full HD (1920 x 1080) Touchscreen Display】Multitouch-enabled, IPS, edge-to-edge glass, microedge, Corning Gorilla Glass NBT. Get expansive, vibrant images and control your entertainment right from the screen.16GB DDR4 RAM】Reams of high-bandwidth DDR4 RAM to smoothly run your graphics-heavy PC games and video-editing applications, as well as numerous programs and browser tabs all at once. 【512GB PCIe SSD】While offering less storage space than a hard drive, a flash-based SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.',
      originalPrice: '',
      currentPrice: '699.00',
      image1:
        'https://m.media-amazon.com/images/I/61b1E9bvOwL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/HP-Pavilion-Laptop-i5-1135G7-Windows/dp/B0C5MBYX56/ref=sr_1_8?crid=2EXPZ5FUNSRTE&keywords=laptops&qid=1694365443&refinements=p_36%3A2421888011%2Cp_n_deal_type%3A23566065011&rnid=23566063011&s=pc&sprefix=laptops%2Caps%2C124&sr=1-8&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf',
    },
    {
      title:
        'Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Starlight',
      id: '11',
      desc: 'IMPRESSIVELY BIG, IMPOSSIBLY THIN — The 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. The durable 100 percent recycled aluminum enclosure is strikingly thin and light.SUPERCHARGED BY M2 — Get more done faster with a powerful 8-core CPU, 10-core GPU, and up to 24GB of unified memory.UP TO 18 HOURS OF BATTERY LIFE — Go all day with the power-efficient performance of the Apple M2 chip. (Battery life varies by use and configuration. See apple.com/batteries for more information.SPACIOUS, BEAUTIFUL DISPLAY — The high-resolution, 15.3-inch Liquid Retina display features 500 nits of brightness, P3 wide color, and support for one billion colors for vibrant images and incredible detail. (The display on the 15-inch MacBook Air has rounded corners at the top. When measured as a standard rectangular shape, the screen is 15.3 inches diagonally; actual viewable area is less.)',
      originalPrice: '',
      currentPrice: ' NA',
      image1: 'https://m.media-amazon.com/images/I/81UFHe-hH5L._AC_SX679_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Apple-2023-MacBook-Laptop-chip/dp/B0C7686169/ref=sr_1_4?keywords=ipad&amp;qid=1694365504&amp;s=pc&amp;sr=1-4&amp;ufe=app_do%253Aamzn1.fos.765d4786-5719-48b9-b588-eab9385652d5&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=3c8d9d4ec33c65b710fd8200d7e5e1bf&camp=1789&creative=9325',
    },
    {
      title: '',
      id: '12',
      desc: '',
      originalPrice: '',
      currentPrice: 'NA',
      image1: '../../../assets/laptop.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL: '',
    },
    {
      title:
        'Microsoft Surface Pro 8-13 Touchscreen - Intel® Evo Platform Core™ i7-16GB Memory - 256GB SSD - Device Only - Platinum (Latest Model)',
      id: '13',
      desc: 'The power of a laptop with the flexibility of a tablet, and every angle in between, with 13” touchscreen, iconic built-in Kickstand, and detachable Keyboard.Windows 11 brings your closer to what you love. Family, friends, obsessions, music, creations — Windows 11 is the one place for it all. With a fresh new feel and tools that make it easier to be efficient, it has what you need for whatever’s next.The first Surface Pro built on the Intel Evo platform. Do it all with the Intel Evo platform — performance, graphics, and battery life in a thin and light PC.The best pen experience on Pro with rechargeable Surface Slim Pen 2 and Surface Pro 8, for the natural feeling of pen on paper,(4) securely stored in Surface Pro Signature Keyboard.',
      originalPrice: '',
      currentPrice: ' NA',
      image1:
        'https://m.media-amazon.com/images/I/71lgiPnaGvL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Microsoft-Surface-Pro-8-13-Touchscreen/dp/B09DJSF748/ref=sr_1_9?keywords=ipad+latest&amp;qid=1694365573&amp;s=pc&amp;sr=1-9&amp;ufe=app_do%253Aamzn1.fos.765d4786-5719-48b9-b588-eab9385652d5&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=21cbe5b92ecd170412fdf964f2216580&camp=1789&creative=9325',
    },
    {
      title:
        'Lenovo IdeaPad 3 Laptop, Student and Business, 15.6” FHD Touchscreen Display, Intel Core i5-1135G7 Processor, 20GB RAM, 512GB SSD, Wi-Fi 6, SD Card Reader, HDMI, Webcam, Windows 11 Home, Grey',
      id: '14',
      desc: '【High Speed RAM And Enormous Space】20GB high-bandwidth DDR4 RAM to smoothly run multiple applications and browser tabs all at once; 512GB PCIe NVMe M.2 Solid State Drive allows to fast bootup and data transfer【Processor】11th Generation Intel Core i5-1135G7 Processor (2.40 GHz up to 4.20 GHz, 4 Cores, 8 Threads)【Display】15.6 FHD (1920 x 1080), IPS, Anti-Glare, Touchscreen, 45%NTSC, 300 nits, 60Hz, LED Backlight, Narrow Bezel【Tech Specs】1 x USB-A 3.2 Gen 1, 1 x USB-A 2.0, 1 x USB-C 3.2 Gen 1, 1 x Headphone/Microphone Combo, 1 x HDMI, 1 x SD Media Card Reader; Wi-Fi 6 AX and Bluetooth 5.1; Touchscreen; Numeric Keyboard; Windows 11 Home【Authorized KKE Bundle】 Bundled with KKE Mousepad, Authorized Sellers ONLY',
      originalPrice: '',
      currentPrice: '579.00',
      image1:
        'https://m.media-amazon.com/images/I/61oXknWtZgL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Lenovo-IdeaPad-Touchscreen-i5-1135G7-Processor/dp/B0C6RJVFXX/ref=sr_1_12?keywords=ipad+latest&amp;qid=1694365573&amp;s=pc&amp;sr=1-12&amp;ufe=app_do%253Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=1c3be33de5669b7dd401e660b1227dce&camp=1789&creative=9325',
    },
    {
      title:
        'Microsoft Surface Pro 8-13 Touchscreen - Intel® Evo Platform Core™ i5-8GB Memory - 256GB SSD - Device Only - Graphite (Latest Model)',
      id: '15',
      desc: 'The power of a laptop with the flexibility of a tablet, and every angle in between, with 13 inch touchscreen, iconic built-in Kickstand, and detachable Keyboard.Windows 11 brings your closer to what you love. Family, friends, obsessions, music, creations — Windows 11 is the one place for it all. With a fresh new feel and tools that make it easier to be efficient, it has what you need for whatever’s next.The first Surface Pro built on the Intel Evo platform. Do it all with the Intel Evo platform — performance, graphics, and battery life in a thin and light PC.The best pen experience on Pro with rechargeable Surface Slim Pen 2 and Surface Pro 8, for the natural feeling of pen on paper,(4) securely stored in Surface Pro Signature Keyboard.',
      originalPrice: '1,199.99',
      currentPrice: '769.18',
      image1:
        'https://m.media-amazon.com/images/I/61xHYJW4rbL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Microsoft-Surface-Pro-8-13-Touchscreen/dp/B09DK2H5HB/ref=sr_1_18?keywords=ipad+latest&qid=1694365573&s=pc&sr=1-18&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf',
    },
    {
      title:
        'Apple iMac 21.5in 2.7GHz Core i5 (ME086LL/A) All In One Desktop, 8GB Memory, 256GB Solid State Drive, MacOS 10.12 Sierra (Renewed)',
      id: '16',
      desc: 'Renewed products look and work like new. These pre-owned products have been inspected and tested by Amazon-qualified suppliers, which typically perform a full diagnostic test, replacement of any defective parts, and a thorough cleaning process. Packaging and accessories may be generic. All products on Amazon Renewed come with a minimum 90-day supplier-backed warranty.',
      originalPrice: '550.00',
      currentPrice: '499.99',
      image1:
        'https://m.media-amazon.com/images/I/71gqlRrQCuL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Apple-2-7GHz-ME086LL-Desktop-Refurbished/dp/B0798WNZVZ/ref=sr_1_1?c=ts&amp;keywords=All-in-One+Computers&amp;qid=1694365760&amp;refinements=p_89%253AApple&amp;rnid=2528832011&amp;s=pc&amp;sr=1-1&amp;ts_id=13896603011&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=26531b76ec192a43b5d1ab8e10fdaaf2&camp=1789&creative=9325',
    },
    {
      title:
        'Apple iMac Pro 27in All-in-One Desktop,Intel,32 GB, Space Gray (MQ2Y2LL/A) (Renewed)1000 GB,macOS High Sierra',
      id: '17',
      desc: 'Radeon Pro Vega 56 with 8GB HBM2 memory 3.2GHz 8-core Intel Xeon W processor w/Turbo Boost up to 4.2GHz 32GB 2666MHz ECC memory 1TB SSD storage, Four Thunderbolt 3 Ports, 10GB EthernetKeyboard and Mouse included.',
      originalPrice: '',
      currentPrice: ' NA',
      image1:
        'https://m.media-amazon.com/images/I/51+wNBKIUuL._AC_SY300_SX300_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Apple-Desktop-MQ2Y2LL-Renewed-Sierra/dp/B07HY44CB1/ref=sr_1_3?c=ts&amp;keywords=All-in-One+Computers&amp;qid=1694365760&amp;refinements=p_89%253AApple&amp;rnid=2528832011&amp;s=pc&amp;sr=1-3&amp;ts_id=13896603011&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=20a8c69540d4450b7465d20f76e57d16&camp=1789&creative=9325',
    },
    {
      title: '',
      id: '18',
      desc: '',
      originalPrice: '',
      currentPrice: '',
      image1: '../../../assets/laptop.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL: '',
    },
  ];

  list2: BestProducts[] = [
    {
      title:
        'Lenovo IdeaPad, 20GB RAM, 1TB SSD, AMD Dual-core Processor, 15.6 Inch HD Anti-Glare Display, Long Battery Life Up to 9.5Hr, HDMI, SD Card Reader, Windows 11, 1 Year Microsoft 365',
      id: '2',
      desc: '【Processor】AMD Athlon Processor 2.3 GHz (4M Cache, up to 3.2 GHz, 2 cores) for Fast and Snappy Performance.【Memory and Storage】20GB High bandwidth RAM to Smoothly Run Multiple Applications and Browser Tabs All at Once. Hard Drive is 1TB PCIe Solid State Drive (SSD) with 128GB eMMC Starup Disk which Allows to Fast Boot-up and Data Transfer.【Display】 15.6 HD (1366x768) Anti-glare Screen, Energy-efficient LED backlight giving you more viewing area and less clutter, on a crystal-clear HD screen.【Operating System】 Windows 11 Home in S mode. You may switch Win 11 S mode to the regular Win 11【Office 365 for one year】 Get full access to Microsoft Excel, Word, PowerPoint, OneNote, Access, and 1 TB of One Drive storage for 1 year.',
      originalPrice: '439.99',
      currentPrice: ' 417.55',
      image1: 'https://m.media-amazon.com/images/I/81mbudCbPLL._AC_SX679_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Lenovo-IdeaPad-Dual-core-Processor-Anti-Glare/dp/B0C3JB53RQ/ref=sr_1_1_sspa?crid=3CJ1TSC9FMO04&amp;keywords=Lenovo&amp;qid=1694806125&amp;sprefix=lenovo%252Caps%252C120&amp;sr=8-1-spons&amp;ufe=app_do%253Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;th=1&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=8f688bdc7be3c5b5226e6e5a080e04b0&camp=1789&creative=9325',
    },
    {
      title:
        'Lenovo IdeaPad, 20GB RAM, 1TB SSD, AMD Dual-core Processor, 15.6 Inch HD Anti-Glare Display, Long Battery Life Up to 9.5Hr, HDMI, SD Card Reader, Windows 11, 1 Year Microsoft 365',
      id: '2',
      desc: '【Processor】AMD Athlon Processor 2.3 GHz (4M Cache, up to 3.2 GHz, 2 cores) for Fast and Snappy Performance.【Memory and Storage】20GB High bandwidth RAM to Smoothly Run Multiple Applications and Browser Tabs All at Once. Hard Drive is 1TB PCIe Solid State Drive (SSD) with 128GB eMMC Starup Disk which Allows to Fast Boot-up and Data Transfer.【Display】 15.6 HD (1366x768) Anti-glare Screen, Energy-efficient LED backlight giving you more viewing area and less clutter, on a crystal-clear HD screen.【Operating System】 Windows 11 Home in S mode. You may switch Win 11 S mode to the regular Win 11【Office 365 for one year】 Get full access to Microsoft Excel, Word, PowerPoint, OneNote, Access, and 1 TB of One Drive storage for 1 year.',
      originalPrice: '439.99',
      currentPrice: ' 417.55',
      image1: 'https://m.media-amazon.com/images/I/81mbudCbPLL._AC_SX679_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Lenovo-IdeaPad-Dual-core-Processor-Anti-Glare/dp/B0C3JB53RQ/ref=sr_1_1_sspa?crid=3CJ1TSC9FMO04&amp;keywords=Lenovo&amp;qid=1694806125&amp;sprefix=lenovo%252Caps%252C120&amp;sr=8-1-spons&amp;ufe=app_do%253Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;th=1&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=8f688bdc7be3c5b5226e6e5a080e04b0&camp=1789&creative=9325',
    },
    {
      title:
        'Lenovo IdeaPad, 20GB RAM, 1TB SSD, AMD Dual-core Processor, 15.6 Inch HD Anti-Glare Display, Long Battery Life Up to 9.5Hr, HDMI, SD Card Reader, Windows 11, 1 Year Microsoft 365',
      id: '2',
      desc: '【Processor】AMD Athlon Processor 2.3 GHz (4M Cache, up to 3.2 GHz, 2 cores) for Fast and Snappy Performance.【Memory and Storage】20GB High bandwidth RAM to Smoothly Run Multiple Applications and Browser Tabs All at Once. Hard Drive is 1TB PCIe Solid State Drive (SSD) with 128GB eMMC Starup Disk which Allows to Fast Boot-up and Data Transfer.【Display】 15.6 HD (1366x768) Anti-glare Screen, Energy-efficient LED backlight giving you more viewing area and less clutter, on a crystal-clear HD screen.【Operating System】 Windows 11 Home in S mode. You may switch Win 11 S mode to the regular Win 11【Office 365 for one year】 Get full access to Microsoft Excel, Word, PowerPoint, OneNote, Access, and 1 TB of One Drive storage for 1 year.',
      originalPrice: '439.99',
      currentPrice: ' 417.55',
      image1: 'https://m.media-amazon.com/images/I/81mbudCbPLL._AC_SX679_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Lenovo-IdeaPad-Dual-core-Processor-Anti-Glare/dp/B0C3JB53RQ/ref=sr_1_1_sspa?crid=3CJ1TSC9FMO04&amp;keywords=Lenovo&amp;qid=1694806125&amp;sprefix=lenovo%252Caps%252C120&amp;sr=8-1-spons&amp;ufe=app_do%253Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;th=1&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=8f688bdc7be3c5b5226e6e5a080e04b0&camp=1789&creative=9325',
    },
    {
      title:
        'Lenovo IdeaPad, 20GB RAM, 1TB SSD, AMD Dual-core Processor, 15.6 Inch HD Anti-Glare Display, Long Battery Life Up to 9.5Hr, HDMI, SD Card Reader, Windows 11, 1 Year Microsoft 365',
      id: '2',
      desc: '【Processor】AMD Athlon Processor 2.3 GHz (4M Cache, up to 3.2 GHz, 2 cores) for Fast and Snappy Performance.【Memory and Storage】20GB High bandwidth RAM to Smoothly Run Multiple Applications and Browser Tabs All at Once. Hard Drive is 1TB PCIe Solid State Drive (SSD) with 128GB eMMC Starup Disk which Allows to Fast Boot-up and Data Transfer.【Display】 15.6 HD (1366x768) Anti-glare Screen, Energy-efficient LED backlight giving you more viewing area and less clutter, on a crystal-clear HD screen.【Operating System】 Windows 11 Home in S mode. You may switch Win 11 S mode to the regular Win 11【Office 365 for one year】 Get full access to Microsoft Excel, Word, PowerPoint, OneNote, Access, and 1 TB of One Drive storage for 1 year.',
      originalPrice: '439.99',
      currentPrice: ' 417.55',
      image1: 'https://m.media-amazon.com/images/I/81mbudCbPLL._AC_SX679_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Lenovo-IdeaPad-Dual-core-Processor-Anti-Glare/dp/B0C3JB53RQ/ref=sr_1_1_sspa?crid=3CJ1TSC9FMO04&amp;keywords=Lenovo&amp;qid=1694806125&amp;sprefix=lenovo%252Caps%252C120&amp;sr=8-1-spons&amp;ufe=app_do%253Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;th=1&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=8f688bdc7be3c5b5226e6e5a080e04b0&camp=1789&creative=9325',
    },
    {
      title:
        'Lenovo IdeaPad, 20GB RAM, 1TB SSD, AMD Dual-core Processor, 15.6 Inch HD Anti-Glare Display, Long Battery Life Up to 9.5Hr, HDMI, SD Card Reader, Windows 11, 1 Year Microsoft 365',
      id: '2',
      desc: '【Processor】AMD Athlon Processor 2.3 GHz (4M Cache, up to 3.2 GHz, 2 cores) for Fast and Snappy Performance.【Memory and Storage】20GB High bandwidth RAM to Smoothly Run Multiple Applications and Browser Tabs All at Once. Hard Drive is 1TB PCIe Solid State Drive (SSD) with 128GB eMMC Starup Disk which Allows to Fast Boot-up and Data Transfer.【Display】 15.6 HD (1366x768) Anti-glare Screen, Energy-efficient LED backlight giving you more viewing area and less clutter, on a crystal-clear HD screen.【Operating System】 Windows 11 Home in S mode. You may switch Win 11 S mode to the regular Win 11【Office 365 for one year】 Get full access to Microsoft Excel, Word, PowerPoint, OneNote, Access, and 1 TB of One Drive storage for 1 year.',
      originalPrice: '439.99',
      currentPrice: ' 417.55',
      image1: 'https://m.media-amazon.com/images/I/81mbudCbPLL._AC_SX679_.jpg',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      clickURL:
        'https://www.amazon.com/Lenovo-IdeaPad-Dual-core-Processor-Anti-Glare/dp/B0C3JB53RQ/ref=sr_1_1_sspa?crid=3CJ1TSC9FMO04&amp;keywords=Lenovo&amp;qid=1694806125&amp;sprefix=lenovo%252Caps%252C120&amp;sr=8-1-spons&amp;ufe=app_do%253Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;th=1&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=8f688bdc7be3c5b5226e6e5a080e04b0&camp=1789&creative=9325',
    },
  ];
  bp!: BestProducts;

  constructor() {}

  getAll(): BestProducts[] {
    return this.list1;
  }
  getAllList2(): BestProducts[] {
    return this.list2;
  }

  getProductById(id: string | null): BestProducts | undefined {
    return this.list1.find((product) => product.id === id);
  }
}
