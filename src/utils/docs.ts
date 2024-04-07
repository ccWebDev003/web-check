export interface Doc {
	id: string
	title: string
	description: string
	use: string
	resources: string[] | { title: string; link: string }[]
	screenshot?: string
}

const docs: Doc[] = [
	{
		id: 'get-ip',
		title: "IP info",
		description:
			"IP-manzil (Internet Protocol address) tarmoqqa/internetga ulangan har bir qurilmaga tayinlangan raqamli yorliqdir. Berilgan domen bilan bog'langan IP-ni domenning A (manzil) yozuvi uchun Domen nomlari tizimi (DNS) so'rovi orqali topish mumkin.",
		use: "Berilgan serverning IP-manzilini topish qo'shimcha tekshiruvlar o'tkazish uchun birinchi qadamdir, chunki u qo'shimcha ma'lumot olish uchun serverni tekshirish imkonini beradi. Jumladan, maqsadli tarmoq infratuzilmasining batafsil xaritasini yaratish, serverning jismoniy joylashuvini aniqlash, xosting xizmatini aniqlash va hatto bir xil IP manzilda joylashgan boshqa domenlarni aniqlash.",
		resources: [
			{
				title: 'IP manzillarni tushunish',
				link: 'https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking',
			},
			{
				title: 'IP manzillar - Wiki',
				link: 'https://en.wikipedia.org/wiki/IP_address',
			},
			{
				title: 'RFC-791 Internet protokoli',
				link: 'https://tools.ietf.org/html/rfc791',
			},
			{
				title: 'whatismyipaddress.com',
				link: 'https://whatismyipaddress.com/',
			},
		],
	},
	{
		id: 'ssl',
		title: 'SSL Chain',
		description:
			"SSL sertifikatlari veb-sayt yoki server identifikatorini tasdiqlovchi, xavfsiz shifrlangan aloqani (HTTPS) faollashtiradigan va mijozlar va serverlar o'rtasida ishonchni o'rnatadigan raqamli sertifikatlardir. Veb-sayt HTTPS protokolidan foydalanishi va tranzitda foydalanuvchi + sayt ma'lumotlarini shifrlashi uchun to'g'ri SSL sertifikati talab qilinadi. SSL sertifikatlari sertifikat egasining shaxsi va qonuniyligini tasdiqlovchi ishonchli uchinchi shaxslar bo'lgan Sertifikat idoralari (CA) tomonidan chiqariladi.",
		use: "SSL certificates not only provide the assurance that data transmission to and from the website is secure, but they also provide valuable OSINT data. Information from an SSL certificate can include the issuing authority, the domain name, its validity period, and sometimes even organization details. This can be useful for verifying the authenticity of a website, understanding its security setup, or even for discovering associated subdomains or other services.",
		resources: [
			{
				title: 'TLS - Wiki',
				link: 'https://en.wikipedia.org/wiki/Transport_Layer_Security',
			},
			{
				title: "SSL nima (Cloudflare o'rganish orqali)",
				link: 'https://www.cloudflare.com/learning/ssl/what-is-ssl/',
			},
			{ title: 'RFC-8446 - TLS', link: 'https://tools.ietf.org/html/rfc8446' },
			{
				title: 'SSL tekshiruvi',
				link: 'https://www.sslshopper.com/ssl-checker.html',
			},
		],
		screenshot: 'https://i.ibb.co/kB7LsV1/wc-ssl.png',
	},
	{
		id: 'dns',
		title: 'DNS Records',
		description:
			"Bu vazifa ma'lum bir domen bilan bog'langan DNS yozuvlarini qidirishni o'z ichiga oladi. DNS - bu inson o'qiy oladigan domen nomlarini kompyuterlar muloqot qilish uchun foydalanadigan IP manzillarga tarjima qiladigan tizim. DNS yozuvlarining har xil turlari mavjud, jumladan A (manzil), MX (pochta almashinuvi), NS (nom serveri), CNAME (kanonik nom) va TXT (matn) va boshqalar.",
		use: "DNS yozuvlarini ajratib olish OSINT tekshiruvida ko'plab ma'lumotlarni taqdim etishi mumkin. Misol uchun, A va AAAA yozuvlari domen bilan bog'liq bo'lgan IP manzillarni ochib berishi mumkin, bu esa serverlarning joylashuvini aniqlashi mumkin. MX yozuvlari domenning elektron pochta provayderi haqida ma'lumot berishi mumkin. TXT yozuvlari ko'pincha turli ma'muriy maqsadlarda qo'llaniladi va ba'zida ichki ma'lumotlarning beixtiyor sizib chiqishi mumkin. Domenning DNS sozlamalarini tushunish uning onlayn infratuzilmasi qanday qurilgani va boshqarilishini tushunish uchun ham foydali bo'lishi mumkin.",
		resources: [
			{
				title: "DNS yozuvlari nima? (Cloudflare ta'limi orqali)",
				link: 'https://www.cloudflare.com/learning/dns/dns-records/',
			},
			{
				title: 'DNS yozuvlari turlari',
				link: 'https://en.wikipedia.org/wiki/List_of_DNS_record_types',
			},
			{ title: 'RFC-1035 - DNS', link: 'https://tools.ietf.org/html/rfc1035' },
			{
				title: 'DNS Lookup (MxToolbox orqali)',
				link: 'https://mxtoolbox.com/DNSLookup.aspx',
			},
		],
		screenshot: 'https://i.ibb.co/7Q1kMwM/wc-dns.png',
	},
	{
		id: 'cookies',
		title: 'Cookies',
		description:
			"Cookie-fayllar vazifasi maqsadli veb-sayt tomonidan o'rnatilgan HTTP cookie-fayllarini tekshirishni o'z ichiga oladi. Cookie-fayllar veb-saytni ko'rish paytida foydalanuvchining kompyuterida veb-brauzer tomonidan saqlanadigan kichik ma'lumotlar bo'laklari. Ularda ma'lum bir mijoz va veb-saytga xos bo'lgan kam miqdordagi ma'lumotlar mavjud, masalan, sayt afzalliklari, foydalanuvchi sessiyasi holati yoki kuzatuv ma'lumotlari.",
		use: "Cookie-fayllar veb-sayt o'z foydalanuvchilarini qanday kuzatishi va ular bilan o'zaro aloqasi haqidagi ma'lumotlarni oshkor qilishi mumkin. Misol uchun, seans cookie-fayllari foydalanuvchi seanslari qanday boshqarilishini ko'rsatishi mumkin va kuzatuv cookie-fayllari qanday kuzatuv yoki tahliliy ramkalar qo'llanilishiga ishora qilishi mumkin. Bundan tashqari, cookie-fayllar siyosati va amaliyotlarini oʻrganish saytning xavfsizlik sozlamalari va maxfiylik qoidalariga muvofiqligi haqida maʼlumot berishi mumkin.",
		resources: [
			{
				title: 'HTTP Cookie hujjatlari (Mozilla)',
				link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies',
			},
			{
				title: 'Cookie fayllari nima (Cloudflare Learning orqali)',
				link: 'https://www.cloudflare.com/learning/privacy/what-are-cookies/',
			},
			{
				title: 'Cookie atributlari uchun sinov (OWASP)',
				link: 'https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes',
			},
			{
				title: 'RFC-6265 - Coolies',
				link: 'https://tools.ietf.org/html/rfc6265',
			},
		],
		screenshot: 'https://i.ibb.co/TTQ6DtP/wc-cookies.png',
	},
	{
		id: 'robots-txt',
		title: 'Crawl Rules',
		description:
			"Robots.txt fayli (odatda) domenning ildizida topiladi va qaysi brauzerlar va botlar tomonidan qaysi sahifalarga e'tibor bermaslik kerakligini ko'rsatish uchun Robotlarni istisno qilish protokolini (REP) amalga oshirish uchun ishlatiladi. Qidiruv tizimi brauzerlari saytingizni haddan tashqari yuklashiga yo'l qo'ymaslik yaxshi amaliyotdir, lekin sahifalarni qidiruv natijalaridan uzoqlashtirish uchun foydalanmaslik kerak (o'rniga noindex meta teg yoki sarlavhadan foydalaning).",
		use: "Tekshiruv davomida robots.txt faylini tekshirish ko'pincha foydali bo'ladi, chunki u ba'zan sayt egasi indekslashni istamaydigan katalog va sahifalarni oshkor qilishi mumkin, chunki ularda maxfiy ma'lumotlar borligi yoki yashirin yoki bog'lanmagan kataloglar. Bundan tashqari, skanerlash qoidalarini tushunish veb-saytning SEO strategiyalari haqida tushuncha berishi mumkin.",
		resources: [
			{
				title: 'Google Search Docs - Robots.txt',
				link: 'https://developers.google.com/search/docs/advanced/robots/intro',
			},
			{
				title: 'robots.txt haqida bilib oling (Moz.com orqali)',
				link: 'https://moz.com/learn/seo/robotstxt',
			},
			{
				title: 'RFC-9309 -  Robots Exclusion Protocol',
				link: 'https://datatracker.ietf.org/doc/rfc9309/',
			},
			{
				title: 'Robots.txt - wiki',
				link: 'https://en.wikipedia.org/wiki/Robots_exclusion_standard',
			},
		],
		screenshot: 'https://i.ibb.co/KwQCjPf/wc-robots.png',
	},
	{
		id: 'headers',
		title: 'Headers',
		description:
			"Sarlavhalar vazifasi so'rov-javob aylanishi davomida maqsadli veb-sayt tomonidan yuborilgan HTTP sarlavhalarini ajratib olish va sharhlashni o'z ichiga oladi. HTTP sarlavhalari HTTP javobining boshida yoki haqiqiy ma'lumotlardan oldin yuborilgan kalit-qiymat juftliklari. Sarlavhalar uzatilayotgan ma'lumotlarni boshqarish bo'yicha muhim ko'rsatmalarni o'z ichiga oladi, jumladan kesh siyosati, kontent turlari, kodlash, server ma'lumotlari, xavfsizlik siyosati va boshqalar.",
		use: "HTTP sarlavhalarini tahlil qilish OSINT tekshiruvida muhim tushunchalarni berishi mumkin. Sarlavhalar ma'lum server konfiguratsiyasini, tanlangan texnologiyalarni, keshlash ko'rsatmalarini va turli xil xavfsizlik sozlamalarini ko'rsatishi mumkin. Ushbu ma'lumot veb-saytning asosiy texnologiya to'plamini, server tomonidagi xavfsizlik choralarini, potentsial zaifliklarni va umumiy operatsion amaliyotlarni aniqlashga yordam beradi.",
		resources: [
			{
				title: 'HTTP sarlavhalari - Hujjatlar',
				link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers',
			},
			{
				title: "RFC-7231 7-bo'lim - Sarlavhalar",
				link: 'https://datatracker.ietf.org/doc/html/rfc7231#section-7',
			},
			{
				title: "Sarlavha javob maydonlari ro'yxati",
				link: 'https://en.wikipedia.org/wiki/List_of_HTTP_header_fields',
			},
			{
				title: 'OWASP Secure Headers loyihasi',
				link: 'https://owasp.org/www-project-secure-headers/',
			},
		],
		screenshot: 'https://i.ibb.co/t3xcwP1/wc-headers.png',
	},
	{
		id: 'quality',
		title: 'Quality Metrics',
		description:
			"Lighthouse-dan foydalanib, Sifat ko'rsatkichlari vazifasi maqsadli veb-saytning ishlashi, foydalanish imkoniyati, eng yaxshi amaliyotlari va SEO-ni o'lchaydi. Bu ma'lum bir saytning umumiy sifatini o'lchash uchun har bir toifa uchun ball bilan birga 100 ta asosiy ko'rsatkichdan iborat oddiy nazorat ro'yxatini qaytaradi.",
		use: "Saytning texnik holatini, SEO muammolarini baholash, zaifliklarni aniqlash va standartlarga muvofiqligini ta'minlash uchun foydalidir.",
		resources: [
			{
				title: 'Lighthouse hujjatlari',
				link: 'https://developer.chrome.com/docs/lighthouse/',
			},
			{
				title: 'Google sahifa tezligi vositalari',
				link: 'https://developers.google.com/speed',
			},
			{
				title: 'W3 Maxsus imkoniyatlar vositalari',
				link: 'https://www.w3.org/WAI/test-evaluate/',
			},
			{
				title: 'Google Search Console',
				link: 'https://search.google.com/search-console',
			},
			{ title: 'SEO tekshiruvi', link: 'https://www.seobility.net/en/seocheck/' },
			{ title: 'PWA Builder', link: 'https://www.pwabuilder.com/' },
		],
		screenshot: 'https://i.ibb.co/Kqg8rx7/wc-quality.png',
	},
	{
		id: 'location',
		title: 'Server Location',
		description:
			"Server joylashuvi vazifasi ma'lum bir veb-saytga ega bo'lgan serverning IP-manziliga qarab jismoniy joylashuvini aniqlaydi. Bu IP-ni ma'lum ma'lumotlar markazlari va Internet provayderlarining lat + uzunligi bilan taqqoslaydigan joylashuv ma'lumotlar bazasida qidirish orqali amalga oshiriladi. Kenglik va uzunlik boʻyicha qoʻshimcha kontekstli maʼlumotlarni, masalan, xaritadagi pin, manzil, bayroq, vaqt mintaqasi, valyuta va boshqalarni koʻrsatish mumkin boʻladi.",
		use: "Server manzilini bilish veb-saytni yaxshiroq tushunish uchun yaxshi birinchi qadamdir. Sayt egalari uchun bu kontent yetkazib berishni optimallashtirish, maʼlumotlar rezidentligi talablariga muvofiqligini taʼminlash va muayyan geografik hududlarda foydalanuvchi tajribasiga taʼsir qilishi mumkin boʻlgan kechikish muammolarini aniqlashda yordam beradi. Xavfsizlik bo'yicha tadqiqotchi uchun esa kiber tahdidlar va qoidalar bilan bog'liq muayyan mintaqalar yoki yurisdiktsiyalar tomonidan yuzaga keladigan xavfni baholang.",
		resources: [
			{ title: 'IP Locator', link: 'https://geobytes.com/iplocator/' },
			{
				title: 'Internet Geolocation - Wiki',
				link: 'https://en.wikipedia.org/wiki/Internet_geolocation',
			},
		],
		screenshot: 'https://i.ibb.co/cXH2hfR/wc-location.png',
	},
	{
		id: 'hosts',
		title: 'Associated Hosts',
		description:
			"Bu vazifa veb-saytning asosiy domeni bilan bog'langan barcha domenlar va subdomenlarni (xost nomlari) aniqlash va ro'yxatga olishni o'z ichiga oladi. Bu jarayon ko'pincha bog'langan domenlar va xost nomlarini aniqlash, shuningdek ma'lum DNS yozuvlarini ko'rib chiqish uchun DNS ro'yxatini o'z ichiga oladi.",
		use: "Tekshiruv davomida maqsadning internetda mavjudligini to'liq tushunish juda muhimdir. Bog'langan domenlar tegishli loyihalarni, zaxira saytlarni, ishlab chiqish/sinov saytlarini yoki asosiy saytga bog'langan xizmatlarni ochishga olib kelishi mumkin. Ular ba'zan qo'shimcha ma'lumot yoki xavfsizlikning mumkin bo'lgan zaifliklarini ta'minlashi mumkin. Bog'langan domenlar va xost nomlarining to'liq ro'yxati, shuningdek, tashkilot tuzilishi va onlayn izlari haqida umumiy ma'lumot berishi mumkin.",
		resources: [
			{
				title: "DNS ro'yxati - Wiki",
				link: 'https://en.wikipedia.org/wiki/DNS_enumeration',
			},
			{
				title: "OWASP - Webserverdagi ilovalarni sanab o'tish",
				link: 'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/04-Enumerate_Applications_on_Webserver',
			},
			{
				title: 'DNS Enumeration - DNS Dumpster',
				link: 'https://dnsdumpster.com/',
			},
			{ title: 'Subdomen qidiruvi', link: 'https://subdomainfinder.c99.nl/' },
		],
		screenshot: 'https://i.ibb.co/25j1sT7/wc-hosts.png',
	},
	{
		id: 'redirects',
		title: 'Redirect Chain',
		description:
			"Bu vazifa asl URLdan yakuniy manzilga boʻlgan HTTP qayta yoʻnaltirishlar ketma-ketligini kuzatadi. HTTP qayta yo'naltirish mijozga boshqa URL manziliga o'tishni maslahat beradigan holat kodi bilan javobdir. Qayta yo'naltirishlar bir necha sabablarga ko'ra sodir bo'lishi mumkin, masalan, URL normalizatsiyasi (saytning www versiyasiga yo'naltirish), HTTPS, URL qisqartirish vositalarini qo'llash yoki foydalanuvchilarni yangi sayt manziliga yo'naltirish.",
		use: "Qayta yo'naltirish zanjirini tushunish bir necha sabablarga ko'ra foydali bo'lishi mumkin. Xavfsizlik nuqtai nazaridan, uzoq yoki murakkab qayta yo'naltirish zanjirlari zanjirdagi shifrlanmagan qayta yo'naltirishlar kabi potentsial xavfsizlik xavflarining belgisi bo'lishi mumkin. Bundan tashqari, qayta yo'naltirishlar veb-sayt ishlashi va SEOga ta'sir qilishi mumkin, chunki har bir qayta yo'naltirish qo'shimcha safar vaqti (RTT) ni taqdim etadi. OSINT uchun qayta yo'naltirish zanjirini tushunish turli domenlar o'rtasidagi munosabatlarni aniqlashga yoki ma'lum texnologiyalar yoki hosting provayderlaridan foydalanishni aniqlashga yordam beradi.",
		resources: [
			{
				title: 'HTTP Redirects - MDN',
				link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections',
			},
			{
				title: 'URL Redirection - Wiki',
				link: 'https://en.wikipedia.org/wiki/URL_redirection',
			},
			{
				title: '301 Redirects explained',
				link: 'https://ahrefs.com/blog/301-redirects/',
			},
		],
		screenshot: 'https://i.ibb.co/hVVrmwh/wc-redirects.png',
	},
	{
		id: 'txt-records',
		title: 'TXT Records',
		description:
			"TXT yozuvlari - bu sizning domeningizdan tashqaridagi manbalarga matnli ma'lumotlarni taqdim qiluvchi DNS yozuvining bir turi. Ular domen egaligini tekshirish, elektron pochta xavfsizligini ta'minlash va hatto veb-saytingizga ruxsatsiz o'zgarishlarni oldini olish kabi turli maqsadlarda ishlatilishi mumkin.",
		use: "TXT yozuvlari ko'pincha ma'lum bir domen bilan qanday tashqi xizmatlar va texnologiyalardan foydalanilayotganligini ko'rsatadi. Ular domenning e-pochta konfiguratsiyasi, Google Workspace yoki Microsoft 365 kabi maxsus xizmatlardan foydalanish yoki SPF va DKIM kabi xavfsizlik choralari haqida maʼlumot berishi mumkin. Ushbu tafsilotlarni tushunish tashkilot tomonidan qo'llaniladigan texnologiyalar, ularning elektron pochta xavfsizligi amaliyotlari va potentsial zaifliklar haqida tushuncha berishi mumkin.",
		resources: [
			{
				title: 'TXT Records (via Cloudflare Learning)',
				link: 'https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/',
			},
			{
				title: 'TXT Records - Wiki',
				link: 'https://en.wikipedia.org/wiki/TXT_record',
			},
			{
				title: 'RFC-1464 - TXT Records',
				link: 'https://datatracker.ietf.org/doc/html/rfc1464',
			},
			{
				title: 'TXT Record Lookup (via MxToolbox)',
				link: 'https://mxtoolbox.com/TXTLookup.aspx',
			},
		],
		screenshot: 'https://i.ibb.co/wyt21QN/wc-txt-records.png',
	},
	{
		id: 'status',
		title: 'Server Status',
		description: "Serverning onlayn ekanligini va so'rovlarga javob berishini tekshiradi.",
		use: '',
		resources: [],
		screenshot: 'https://i.ibb.co/V9CNLBK/wc-status.png',
	},
	{
		id: 'ports',
		title: 'Open Ports',
		description:
			"Serverdagi ochiq portlar - bu mijozlar bilan aloqa o'rnatish uchun mavjud bo'lgan so'nggi aloqa nuqtalari. Har bir port HTTP (80-port), HTTPS (443-port), FTP (21-port) va boshqalar kabi maʼlum bir xizmat yoki protokolga mos keladi. Serverdagi ochiq portlarni portni skanerlash kabi usullar yordamida aniqlash mumkin.",
		use: "Serverda qaysi portlar ochiqligini bilish ushbu serverda ishlaydigan xizmatlar haqida ma'lumot berishi mumkin, bu tizimning potentsial zaifliklarini tushunish yoki server taqdim etayotgan xizmatlarning mohiyatini tushunish uchun foydalidir.",
		resources: [
			{
				title: 'List of TCP & UDP Port Numbers',
				link: 'https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers',
			},
			{
				title: 'NMAP - Port Scanning Basics',
				link: 'https://nmap.org/book/man-port-scanning-basics.html',
			},
		],
		screenshot: 'https://i.ibb.co/F8D1hmf/wc-ports.png',
	},
	{
		id: 'trace-route',
		title: 'Traceroute',
		description:
			"Traceroute - bu bir tizimdan ikkinchisiga ma'lumot to'plami tomonidan olingan yo'lni real vaqt rejimida kuzatish uchun foydalaniladigan tarmoq diagnostikasi vositasi. U marshrut bo'ylab har bir sakrashni qayd etib, marshrutizatorlarning IP-lari va har bir nuqtadagi kechikish haqida ma'lumot beradi.",
		use: "OSINT tekshiruvlarida traceroute veb-sayt yoki xizmatni qo'llab-quvvatlovchi tarmoq infratuzilmasining marshrutlash yo'llari va geografiyasi haqida ma'lumot berishi mumkin. Bu tarmoqdagi to'siqlarni, potentsial tsenzura yoki tarmoq trafigini manipulyatsiya qilishni aniqlashga yordam beradi va tarmoq tuzilishi va samaradorligi haqida umumiy ma'lumot beradi. Bundan tashqari, traceroute davomida to'plangan IP-manzillar OSINTni keyingi tekshirish uchun qo'shimcha so'rov nuqtalarini taqdim etishi mumkin.",
		resources: [
			'https://www.cloudflare.com/learning/network-layer/what-is-traceroute/',
			'https://tools.ietf.org/html/rfc1393',
			'https://en.wikipedia.org/wiki/Traceroute',
			'https://www.ripe.net/publications/docs/ripe-611',
		],
		screenshot: 'https://i.ibb.co/M59qgxP/wc-trace-route.png',
	},
	{
		id: 'carbon',
		title: 'Carbon Footprint',
		description:
			"Ushbu vazifa veb-saytning taxminiy uglerod izini hisoblab chiqadi. U uzatilayotgan va qayta ishlanayotgan ma’lumotlar miqdori hamda veb-saytni joylashtirgan va yetkazib beruvchi serverlarning energiya sarfiga asoslanadi. Veb-sayt qanchalik katta va uning xususiyatlari qanchalik murakkab bo'lsa, uning uglerod izi shunchalik yuqori bo'ladi.",
		use: "OSINT nuqtai nazaridan, veb-saytning uglerod izini tushunish uning ichki ishlashi yoki uning ortida turgan tashkilot haqida to'g'ridan-to'g'ri tushuncha bermaydi. Biroq, bu hali ham kengroq tahlillarda, ayniqsa atrof-muhitga ta'sir ko'rsatadigan kontekstlarda qimmatli ma'lumotlar bo'lishi mumkin. Masalan, raqamli infratuzilmaning barqarorligidan manfaatdor bo'lgan va tashkilotlarni atrof-muhitga ta'siri uchun javobgarlikka tortmoqchi bo'lgan faollar, tadqiqotchilar yoki axloqiy xakerlar uchun foydali bo'lishi mumkin.",
		resources: [
			{
				title: 'WebsiteCarbon - Carbon Calculator',
				link: 'https://www.websitecarbon.com/',
			},
			{
				title: 'The Green Web Foundation',
				link: 'https://www.thegreenwebfoundation.org/',
			},
			{
				title: 'The Eco Friendly Web Alliance',
				link: 'https://ecofriendlyweb.org/',
			},
			{ title: 'Reset.org', link: 'https://en.reset.org/' },
			{
				title: 'Your website is killing the planet - via Wired',
				link: 'https://www.wired.co.uk/article/internet-carbon-footprint',
			},
		],
		screenshot:
			'https://i.ibb.co/5v6fSyw/Screenshot-from-2023-07-29-19-07-50.png',
	},
	{
		id: 'server-info',
		title: 'Server Info',
		description:
			"Bu vazifa maqsadli veb-saytni joylashtirgan server haqida turli xil ma'lumotlarni oladi. Bunga server turi (masalan, Apache, Nginx), hosting provayderi, avtonom tizim raqami (ASN) va boshqalar kiradi. Ma'lumot odatda IP manzillarini qidirish va HTTP javob sarlavhalarini tahlil qilish orqali olinadi.",
		use: "OSINT kontekstida server ma'lumotlari veb-sayt ortida turgan tashkilot haqida qimmatli maslahatlar berishi mumkin. Misol uchun, hosting provayderini tanlash tashkilot faoliyat yuritadigan geografik mintaqani taklif qilishi mumkin, server turi esa tashkilot tomonidan qo'llaniladigan texnologiyalarga ishora qilishi mumkin. ASN xuddi shu tashkilot tomonidan joylashtirilgan boshqa domenlarni topish uchun ham ishlatilishi mumkin.",
		resources: [
			'https://en.wikipedia.org/wiki/List_of_HTTP_header_fields',
			'https://en.wikipedia.org/wiki/Autonomous_system_(Internet)',
			'https://tools.ietf.org/html/rfc7231#section-7.4.2',
			'https://builtwith.com/',
		],
		screenshot: 'https://i.ibb.co/Mk1jx32/wc-server.png',
	},
	{
		id: 'domain',
		title: 'Whois Lookup',
		description:
			"Bu vazifa maqsadli domen uchun Whois yozuvlarini oladi. Whois yozuvlari domenni ro'yxatdan o'tkazuvchining nomi va aloqa ma'lumotlari, domenni yaratish va amal qilish muddati, domen nomlari serverlari va boshqalarni o'z ichiga olgan boy ma'lumot manbai hisoblanadi. Ma'lumot odatda Whois ma'lumotlar bazasi serveriga so'rov orqali olinadi.",
		use: "OSINT kontekstida Whois yozuvlari veb-sayt ortida turgan ob'ekt haqida qimmatli maslahatlar berishi mumkin. Ular domen qachon birinchi marta roʻyxatdan oʻtganligi va muddati tugashini koʻrsatishi mumkin, bu esa obʼyektning operatsion vaqt jadvalini tushunish imkonini beradi. Kontakt ma'lumotlari, garchi tez-tez tahrirlangan yoki anonimlashtirilgan bo'lsa ham, ba'zida qo'shimcha tergov yo'llariga olib kelishi mumkin. Nom serverlari bir xil ob'ektga tegishli bir nechta domenlarni bir-biriga bog'lash uchun ham ishlatilishi mumkin.",
		resources: [
			'https://en.wikipedia.org/wiki/WHOIS',
			'https://www.icann.org/resources/pages/whois-2018-01-17-en',
			'https://whois.domaintools.com/',
		],
		screenshot: 'https://i.ibb.co/89WLp14/wc-domain.png',
	},
	{
		id: 'whois',
		title: 'Domain Info',
		description:
			"Bu vazifa maqsadli domen uchun Whois yozuvlarini oladi. Whois yozuvlari domenni ro'yxatdan o'tkazuvchining nomi va aloqa ma'lumotlari, domenni yaratish va amal qilish muddati, domen nomlari serverlari va boshqalarni o'z ichiga olgan boy ma'lumot manbai hisoblanadi. Ma'lumot odatda Whois ma'lumotlar bazasi serveriga so'rov orqali olinadi.",
		use: "OSINT kontekstida Whois yozuvlari veb-sayt ortida turgan ob'ekt haqida qimmatli maslahatlar berishi mumkin. Ular domen qachon birinchi marta roʻyxatdan oʻtganligi va muddati tugashini koʻrsatishi mumkin, bu esa obʼyektning operatsion vaqt jadvalini tushunish imkonini beradi. Kontakt ma'lumotlari, garchi tez-tez tahrirlangan yoki anonimlashtirilgan bo'lsa ham, ba'zida qo'shimcha tergov yo'llariga olib kelishi mumkin. Nom serverlari bir xil ob'ektga tegishli bir nechta domenlarni bir-biriga bog'lash uchun ham ishlatilishi mumkin.",
		resources: [
			'https://en.wikipedia.org/wiki/WHOIS',
			'https://www.icann.org/resources/pages/whois-2018-01-17-en',
			'https://whois.domaintools.com/',
		],
		screenshot: 'https://i.ibb.co/89WLp14/wc-domain.png',
	},
	{
		id: 'dnssec',
		title: 'DNS Security Extensions',
		description:
			"DNSSEC bo'lmasa, MITM tajovuzkorlari yozuvlarni soxtalashtirishi va foydalanuvchilarni fishing saytlariga olib borishi mumkin. Buning sababi, DNS tizimi so'rovga javob soxta emasligini yoki jarayonning boshqa qismi tajovuzkor tomonidan to'xtatilmaganligini tekshirish uchun o'rnatilgan usullarni o'z ichiga olmaydi. DNS xavfsizlik kengaytmalari (DNSSEC) ochiq kalitlar yordamida DNS yozuvlaringizni imzolash orqali DNS qidiruvlarini himoya qiladi, shuning uchun brauzerlar javob buzilganligini aniqlashlari mumkin. Ushbu muammoning yana bir yechimi DoH (HTTPS orqali DNS) va DoT (TLD orqali DNS).",
		use: "DNSSEC ma'lumotlari tashkilotning kiberxavfsizlikning etuklik darajasi va potentsial zaifliklari, ayniqsa DNS spoofing va kesh zaharlanishi haqida tushuncha beradi. Agar DNS xavfsizligi (DNSSEC, DoH, DoT va boshqalar) amalga oshirilmasa, bu tajovuzkor uchun kirish nuqtasini ta'minlashi mumkin.",
		resources: [
			'https://dnssec-analyzer.verisignlabs.com/',
			'https://www.cloudflare.com/dns/dnssec/how-dnssec-works/',
			'https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions',
			'https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en',
			'https://support.google.com/domains/answer/6147083',
			'https://www.internetsociety.org/resources/deploy360/2013/dnssec-test-sites/',
		],
		screenshot: 'https://i.ibb.co/J54zVmQ/wc-dnssec.png',
	},
	{
		id: 'features',
		title: 'Site Features',
		description:
			"Saytda qaysi asosiy xususiyatlar mavjudligini tekshiradi. Agar funktsiya o'lik deb belgilangan bo'lsa, demak u yuklash vaqtida faol foydalanilmayapti",
		use: 'Bu sayt nimaga qodirligini va qanday texnologiyalarni izlash kerakligini tushunish uchun foydalidir',
		resources: [],
		screenshot: 'https://i.ibb.co/gP4P6kp/wc-features.png',
	},
	{
		id: 'hsts',
		title: 'HTTP Strict Transport Security',
		description:
			`'HTTP qat'iy transport xavfsizligi (HSTS) - bu veb-xavfsizlik siyosati ' +
			'veb-saytlarni protokolni pasaytirish hujumlaridan himoya qilishga yordam beradigan mexanizm va ' +
			'cookie o'g'irlash. Veb-sayt HSTS oldindan yuklash ro'yxatiga + belgisi bilan kiritilishi mumkin
			'talablar to'plamiga mos keladi va keyin o'zini ro'yxatga kiritadi.`,
		use: `Sayt uchun HSTS yoqilgan bo'lishi muhimligining bir necha sabablari bor:
		1. Foydalanuvchi xatcho‘plari yoki http://example.com saytini qo‘lda kiritadi va u o‘rtadagi odam hujumiga duchor bo‘ladi.
			HSTS HTTP so'rovlarini maqsadli domen uchun HTTPS ga avtomatik ravishda yo'naltiradi
		2. Sof HTTPS bo'lishi uchun mo'ljallangan veb-ilova beixtiyor HTTP havolalarini o'z ichiga oladi yoki HTTP orqali kontentga xizmat qiladi
			HSTS HTTP so'rovlarini maqsadli domen uchun HTTPS ga avtomatik ravishda yo'naltiradi
		3. O‘rtadagi odam tajovuzkor yaroqsiz sertifikat yordamida jabrlanuvchi foydalanuvchidan trafikni to‘xtatmoqchi bo‘ladi va foydalanuvchi noto‘g‘ri sertifikatni qabul qilishiga umid qiladi.
			HSTS foydalanuvchiga yaroqsiz sertifikat xabarini bekor qilishga ruxsat bermaydi
    `,
		resources: [
			'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security',
			'https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html',
			'https://hstspreload.org/',
		],
		screenshot:
			'https://i.ibb.co/k253fq4/Screenshot-from-2023-07-17-20-10-52.png',
	},
	{
		id: 'dns-server',
		title: 'DNS Server',
		description:
			"Ushbu tekshirish so'ralgan URL/IP hal qiladigan DNS server(lar)ni aniqlaydi. Shuningdek, DNS-server DoH-ni qo'llab-quvvatlayaptimi yoki yo'qligini aniqlash uchun oddiy tekshiruvni o'chirib qo'yadi va uning DNS keshini zaharlanishiga qarshi himoyasiz.",
		use: '',
		resources: [],
		screenshot:
			'https://i.ibb.co/tKpL8F9/Screenshot-from-2023-08-12-15-43-12.png',
	},
	{
		id: 'sitemap',
		title: 'Listed Pages',
		description:
			"Bu ish saytning sanab o'tilgan sayt xaritasini topadi va tahlil qiladi. Ushbu faylda muallif qidiruv tizimlari tomonidan tekshirilishini istagan saytdagi umumiy pastki sahifalar ro'yxati keltirilgan. Sayt xaritalari SEO bilan yordam beradi, lekin ayni paytda barcha saytlarning umumiy mazmunini bir qarashda ko'rish uchun foydalidir.",
		use: "Saytning ommaga moʻljallangan kontenti tuzilishini tushunib oling va sayt egalari uchun saytingiz xaritasi ochiq, tahlil qilish mumkin va siz xohlagan hamma narsani oʻz ichiga olganligini tekshiring.",
		resources: [
			{
				title: 'Learn about Sitemaps',
				link: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview',
			},
			{
				title: 'Sitemap XML spec',
				link: 'https://www.sitemaps.org/protocol.html',
			},
			{
				title: 'Sitemap tutorial',
				link: 'https://www.conductor.com/academy/xml-sitemap/',
			},
		],
		screenshot:
			'https://i.ibb.co/GtrCQYq/Screenshot-from-2023-07-21-12-28-38.png',
	},
	{
		id: 'security-txt',
		title: 'Security.txt',
		description:
		"Security.txt fayli tadqiqotchilarga saytingizda topilgan har qanday xavfsizlik muammolarini qanday qilib mas'uliyat bilan oshkor qilishlari mumkinligini aytadi. " +
		"Standart RFC 9116 da taklif qilingan va bu faylda aloqa nuqtasi (elektron pochta manzili) boʻlishi kerakligini bildiradi), " +
		"shuningdek, ixtiyoriy ravishda boshqa ma'lumotlar, masalan, xavfsizlikni oshkor qilish siyosatiga havola, PGP kaliti, taklif qilingan til, siyosatning amal qilish muddati va boshqalar. " +
		"Fayl domeningizning ildizida, /security.txt yoki /.well-known/security.txt manzillarida joylashgan bo'lishi kerak.",
		use:
		"Bu juda muhim, chunki aniqlangan aloqa nuqtasisiz xavfsizlik tadqiqotchisi muhim xavfsizlik muammosi haqida xabar bera olmasligi mumkin," +
		"yoki buning uchun xavfli yoki ehtimol jamoat kanallaridan foydalanishi mumkin. OSINT nuqtai nazaridan siz sayt haqida ma'lumot olishingiz mumkin, shu jumladan " +
		"Ularning xavfsizlik bo'yicha pozitsiyasi, CSAF provayderi va PGP ochiq kalitidagi meta-ma'lumotlar.",
		resources: [
			{ title: 'securitytxt.org', link: 'https://securitytxt.org/' },
			{
				title: 'RFC-9116 Proposal',
				link: 'https://datatracker.ietf.org/doc/html/rfc9116',
			},
			{
				title: 'RFC-9116 History',
				link: 'https://datatracker.ietf.org/doc/rfc9116/',
			},
			{
				title: 'Security.txt (Wikipedia)',
				link: 'https://en.wikipedia.org/wiki/Security.txt',
			},
			{
				title: 'Example security.txt (Cloudflare)',
				link: 'https://www.cloudflare.com/.well-known/security.txt',
			},
			{
				title: 'Tutorial for creating security.txt (Pieter Bakker)',
				link: 'https://pieterbakker.com/implementing-security-txt/',
			},
		],
		screenshot:
			'https://i.ibb.co/tq1FT5r/Screenshot-from-2023-07-24-20-31-21.png',
	},
	{
		id: 'linked-pages',
		title: 'Linked Pages',
		description:
			"Anchor elementlariga biriktirilgan href atributlari bilan aniqlangan saytdagi barcha ichki va tashqi havolalarni ko'rsatadi.",
		use:
		"Sayt egalari uchun bu SEO muammolarini tashxislash, sayt tuzilishini yaxshilash, kontentning o'zaro bog'liqligini tushunish uchun foydalidir. Tashqi havolalar sheriklik, bog'liqlik va obro'ga potentsial xavflarni ko'rsatishi mumkin. " +
		"Xavfsizlik nuqtai nazaridan, chiquvchi havolalar veb-sayt bilmagan holda bog'langan har qanday potentsial zararli yoki buzilgan saytlarni aniqlashga yordam beradi. Ichki havolalarni tahlil qilish sayt tuzilishini tushunishga yordam beradi va ochiq bo'lishi uchun mo'ljallanmagan yashirin yoki zaif sahifalarni aniqlashga yordam beradi. "+
		"Va OSINT tergovchisi uchun bu maqsadni to'liq tushunishga yordam beradi, tegishli ob'ektlarni, resurslarni yoki hatto saytning yashirin qismlarini aniqlashga yordam beradi.",
		resources: [
			{ title: 'W3C Link Checker', link: 'https://validator.w3.org/checklink' },
		],
		screenshot:
			'https://i.ibb.co/LtK14XR/Screenshot-from-2023-07-29-11-16-44.png',
	},
	{
		id: 'social-tags',
		title: 'Social Tags',
		description:
			"Veb-saytlar ma'lum meta teglarni o'z ichiga olishi mumkin, ular qidiruv tizimlari va ijtimoiy media platformalariga qanday ma'lumotlarni ko'rsatish kerakligini aytadi. Bu odatda sarlavha, tavsif, eskiz, kalit so'zlar, muallif, ijtimoiy hisoblar va boshqalarni o'z ichiga oladi.",
		use: "Ushbu ma'lumotlarni saytingizga qo'shish SEO-ni kuchaytiradi va OSINT tadqiqotchisi sifatida ma'lum bir veb-ilova o'zini qanday tasvirlashini tushunish foydali bo'lishi mumkin.",
		resources: [
			{
				title: 'SocialSharePreview.com',
				link: 'https://socialsharepreview.com/',
			},
			{
				title: 'The guide to social meta tags',
				link: 'https://css-tricks.com/essential-meta-tags-social-media/',
			},
			{
				title: 'Web.dev metadata tags',
				link: 'https://web.dev/learn/html/metadata/',
			},
			{ title: 'Open Graph Protocol', link: 'https://ogp.me/' },
			{
				title: 'Twitter Cards',
				link: 'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
			},
			{
				title: 'Facebook Open Graph',
				link: 'https://developers.facebook.com/docs/sharing/webmasters',
			},
		],
		screenshot:
			'https://i.ibb.co/4srTT1w/Screenshot-from-2023-07-29-11-15-27.png',
	},
	{
		id: 'mail-config',
		title: 'Email Configuration',
		description:
		"DMARC (Domenga asoslangan xabarni autentifikatsiya qilish, hisobot berish va muvofiqlik): DMARC elektron pochtani autentifikatsiya qilish protokoli boʻlib, u elektron pochtani aldash va fishingni oldini olish uchun SPF va DKIM bilan ishlaydi. U domen egalariga DNSʼda eʼlon qilingan siyosat orqali autentifikatsiya qilinmagan xatlarni qanday boshqarishni belgilash imkonini beradi. , va jo'natuvchiga elektron pochta xabarlarining muvofiqligi haqida fikr-mulohaza yuborish uchun pochta serverlarini qabul qilish usulini taqdim etadi." +
		"BIMI (Xabarni identifikatsiyalash uchun brend ko'rsatkichlari): BIMI - rivojlanayotgan elektron pochta standarti bo'lib, u tashkilotlarga o'z mijozlarining elektron pochta mijozlarida logotipni avtomatik ravishda ko'rsatishga imkon beradi. BIMI logotipni domenning DMARC yozuviga bog'laydi va qabul qiluvchilarga yana bir darajadagi vizual ishonchni ta'minlaydi. elektron pochta qonuniydir." +
		"DKIM (DomainKeys Identified Mail): DKIM elektron pochta xavfsizligi standarti bo'lib, xabarlarni jo'natuvchi va qabul qiluvchi serverlari o'rtasida uzatishda o'zgarmasligiga ishonch hosil qilish uchun mo'ljallangan. U jo‘natuvchini tekshirish va xabarning yaxlitligini ta’minlash uchun jo‘natuvchining domeniga bog‘langan raqamli imzolardan foydalanadi. " +
		"SPF (Sender Policy Framework): SPF elektron pochtani aldashning oldini olish uchun moʻljallangan elektron pochtani autentifikatsiya qilish usulidir. U qaysi pochta serverlari DNS yozuvini yaratish orqali domen nomidan elektron pochta xabarlarini yuborishga ruxsat berilganligini belgilaydi. Bu spamdan himoyalanish yoʻlini taqdim etish orqali yordam beradi. domendan kiruvchi xatlar ushbu domen ma'murlari tomonidan ruxsat etilgan xostdan kelganligini tekshirish uchun pochta serverlarini qabul qilish uchun.",
		use: "Ushbu ma'lumot tadqiqotchilar uchun foydalidir, chunki u domenning elektron pochta xavfsizligi holatini baholashga, potentsial zaifliklarni aniqlashga va fishingni aniqlash uchun elektron pochta xabarlarining qonuniyligini tekshirishga yordam beradi. Ushbu tafsilotlar, shuningdek, hosting muhiti, potentsial xizmat ko'rsatuvchi provayderlar va maqsadli tashkilotning konfiguratsiya modellari haqida ma'lumot beradi va tergov harakatlariga yordam beradi.",
		resources: [
			{
				title: 'Intro to DMARC, DKIM, and SPF (via Cloudflare)',
				link: 'https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/',
			},
			{
				title: 'EasyDMARC Domain Scanner',
				link: 'https://easydmarc.com/tools/domain-scanner',
			},
			{ title: 'MX Toolbox', link: 'https://mxtoolbox.com/' },
			{
				title: 'RFC-7208 - SPF',
				link: 'https://datatracker.ietf.org/doc/html/rfc7208',
			},
			{
				title: 'RFC-6376 - DKIM',
				link: 'https://datatracker.ietf.org/doc/html/rfc6376',
			},
			{
				title: 'RFC-7489 - DMARC',
				link: 'https://datatracker.ietf.org/doc/html/rfc7489',
			},
			{ title: 'BIMI Group', link: 'https://bimigroup.org/' },
		],
		screenshot:
			'https://i.ibb.co/yqhwx5G/Screenshot-from-2023-07-29-18-22-20.png',
	},
	{
		id: 'firewall',
		title: 'Firewall Detection',
		description:
			"WAF yoki veb-ilovalar himoya devori veb-ilova va Internet o'rtasidagi HTTP trafigini filtrlash va kuzatish orqali veb-ilovalarni himoya qilishga yordam beradi. U odatda veb-ilovalarni saytlararo soxtalashtirish, saytlararo skript yaratish (XSS), fayllarni kiritish va SQL in'ektsiyasi kabi hujumlardan himoya qiladi.",
		use: "Sayt WAF dan foydalanyaptimi yoki yo'qmi va u qaysi xavfsizlik devori dasturiy ta'minoti/xizmatidan foydalanayotganini tushunish foydalidir, chunki bu saytlarni bir nechta hujum vektorlaridan himoya qilish haqida tushuncha beradi, lekin xavfsizlik devorining o'zida zaifliklarni ham aniqlashi mumkin.",
		resources: [
			{
				title: 'What is a WAF (via Cloudflare Learning)',
				link: 'https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/',
			},
			{
				title: 'OWASP - Web Application Firewalls',
				link: 'https://owasp.org/www-community/Web_Application_Firewall',
			},
			{
				title: 'Web Application Firewall Best Practices',
				link: 'https://owasp.org/www-pdf-archive/Best_Practices_Guide_WAF_v104.en.pdf',
			},
			{
				title: 'WAF - Wiki',
				link: 'https://en.wikipedia.org/wiki/Web_application_firewall',
			},
		],
		screenshot:
			'https://i.ibb.co/MfcxQt2/Screenshot-from-2023-08-12-15-40-52.png',
	},
	{
		id: 'http-security',
		title: 'HTTP Security Features',
		description:
		"To'g'ri sozlangan xavfsizlik HTTP sarlavhalari saytingizga umumiy hujumlardan himoya qatlamini qo'shadi. E'tiborga olish kerak bo'lgan asosiy sarlavhalar: " +
		"HTTP qat'iy transport xavfsizligi (HSTS): \"O'rtadagi odam\" hujumlarini va protokolni pasaytirish urinishlarini yumshatib, HTTPSdan foydalanishni ta'minlaydi. " +
		"Kontent xavfsizligi siyosati (CSP): Saytlararo skriptlar va ma'lumotlarni kiritish hujumlarining oldini olish uchun veb-sahifa resurslarini cheklaydi. " +
		"\"X-Content-Type-Options\": Brauzerlarning e'lon qilingan kontent turidan uzoqda MIME-ni ko'rishini oldini oladi va MIME tipidagi chalkashlik hujumlarini cheklaydi. " +
		"X-Frame-Options: Brauzer sahifani <frame>, <iframe>, <embed> yoki <ob'ekt>da ko'rsatishi kerakligini nazorat qilish orqali foydalanuvchilarni kliklash hujumlaridan himoya qiladi. ",
		use: "Xavfsizlik sarlavhalarini ko'rib chiqish juda muhim, chunki u saytning mudofaa holati va potentsial zaifliklari haqida tushuncha beradi, faol yumshatish imkonini beradi va xavfsizlikning eng yaxshi amaliyotlariga rioya qilishni ta'minlaydi.",
		resources: [
			{
				title: 'OWASP Secure Headers Project',
				link: 'https://owasp.org/www-project-secure-headers/',
			},
			{
				title: 'HTTP Header Cheatsheet',
				link: 'https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html',
			},
			{
				title: 'content-security-policy.com',
				link: 'https://content-security-policy.com/',
			},
			{ title: 'resourcepolicy.fyi', link: 'https://resourcepolicy.fyi/' },
			{ title: 'HTTP Security Headers', link: 'https://securityheaders.com/' },
			{
				title: 'Mozilla Observatory',
				link: 'https://observatory.mozilla.org/',
			},
			{
				title: 'CSP Docs',
				link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP',
			},
			{
				title: 'HSTS Docs',
				link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security',
			},
			{
				title: 'X-Content-Type-Options Docs',
				link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options',
			},
			{
				title: 'X-Frame-Options Docs',
				link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options',
			},
			{
				title: 'X-XSS-Protection Docs',
				link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection',
			},
		],
		screenshot:
			'https://i.ibb.co/LP05HMV/Screenshot-from-2023-08-12-15-40-28.png',
	},
	{
		id: 'archives',
		title: 'Archive History',
		description: "Wayback mashinasidan arxivlarning toʻliq tarixini oladi",
		use: "Bu sayt tarixini va vaqt o'tishi bilan qanday o'zgarganligini tushunish uchun foydalidir. Bundan tashqari, u saytning eski versiyalarini topish yoki o'chirilgan tarkibni topish uchun foydali bo'lishi mumkin.",
		resources: [{ title: 'Wayback Machine', link: 'https://archive.org/web/' }],
		screenshot:
			'https://i.ibb.co/nB9szT1/Screenshot-from-2023-08-14-22-31-16.png',
	},
	{
		id: 'rank',
		title: 'Global Ranking',
		description:
			"Ushbu tekshirish so'ralgan saytning global darajasini ko'rsatadi. Bu faqat eng yaxshi 100 million ro'yxatdagi veb-saytlar uchun to'g'ri. Umbrella, Majestic, Quantcast, Chrome User Experience Report va Cloudflare Radar-dan internetdagi eng yaxshi saytlarni jamlagan Tranco loyihasi maʼlumotlaridan foydalanmoqdamiz (pastga qarang).",
		use: "Veb-saytlarning umumiy global reytingini bilish sayt ko'lamini tushunish va uni boshqa saytlar bilan taqqoslash uchun foydali bo'lishi mumkin. Bu saytning nisbiy mashhurligini tushunish va potentsial tendentsiyalarni aniqlash uchun ham foydali bo'lishi mumkin.",
		resources: [
			{ title: 'Tranco List', link: 'https://tranco-list.eu/' },
			{
				title: 'Tranco Research Paper',
				link: 'https://tranco-list.eu/assets/tranco-ndss19.pdf',
			},
		],
		screenshot:
			'https://i.ibb.co/nkbczgb/Screenshot-from-2023-08-14-22-02-40.png',
	},
	{
		id: 'block-lists',
		title: 'Block Detection',
		description:
			"10+ eng mashhur maxfiylik, zararli dastur va DNS serverlarini bloklovchi ota-ona nazorati yordamida URL manziliga kirishni tekshiradi.",
		use: '',
		resources: [
			{
				title: 'ThreatJammer Lists',
				link: 'https://threatjammer.com/osint-lists',
			},
		],
		screenshot:
			'https://i.ibb.co/M5JSXbW/Screenshot-from-2023-08-26-12-12-43.png',
	},
	{
		id: 'threats',
		title: 'Malware & Phishing Detection',
		description:
			"Saytning tahdid darajasini aniqlash uchun bir nechta keng tarqalgan zararli dasturlar va fishing ro'yxatlarida paydo bo'lishini tekshiradi.",
		use: "Saytning ushbu xizmatlardan birortasi tomonidan tahdid ro'yxatiga kiritilganligini bilish sayt obro'sini tushunish va potentsial tendentsiyalarni aniqlash uchun foydali bo'lishi mumkin.",
		resources: [
			{ title: 'URLHaus', link: 'https://urlhaus-api.abuse.ch/' },
			{ title: 'PhishTank', link: 'https://www.phishtank.com/' },
		],
		screenshot:
			'https://i.ibb.co/hYgy621/Screenshot-from-2023-08-26-12-07-47.png',
	},
	{ 
		id: 'tls-cipher-suites',
		title: 'TLS Cipher Suites',
		description:
			"Bu xavfsiz ulanishni o'rnatish uchun server tomonidan ishlatiladigan kriptografik algoritmlarning kombinatsiyasi. U kalitlarni almashish algoritmini, ommaviy shifrlash algoritmini, MAC algoritmini va PRFni (soxta tasodifiy funktsiya) o'z ichiga oladi.",
		use: "Bu xavfsizlik nuqtai nazaridan sinab ko'rish uchun muhim ma'lumot. Chunki shifrlar to'plami faqat o'z ichiga olgan algoritmlar kabi xavfsizdir. Agar shifrlash to'plamidagi shifrlash yoki autentifikatsiya algoritmi versiyasida ma'lum zaifliklar bo'lsa, shifrlar to'plami va TLS ulanishi pasaytirish yoki boshqa hujumlarga qarshi himoyasiz bo'lishi mumkin.",
		resources: [
			{ title: 'sslscan2 CLI', link: 'https://github.com/rbsec/sslscan' },
			{
				title: 'ssl-enum-ciphers (NPMAP script)',
				link: 'https://nmap.org/nsedoc/scripts/ssl-enum-ciphers.html',
			},
		],
		screenshot:
			'https://i.ibb.co/6ydtH5R/Screenshot-from-2023-08-26-12-09-58.png',
	},
	{
		id: 'tls-security-config',
		title: 'TLS Security Config',
		description:
			"Bu TLS konfiguratsiyasi xavfsizligini tekshirish uchun Mozilla's TLS Observatory ko'rsatmalaridan foydalanadi. U saytni hujumga qarshi himoyasiz qoldirishi mumkin bo'lgan yomon konfiguratsiyalarni tekshiradi, shuningdek, tuzatish bo'yicha maslahatlar beradi. Shuningdek, u eskirgan va zamonaviy TLS konfiguratsiyasi bo'yicha takliflar beradi",
		use: "Saytning TLS konfiguratsiyasi bilan bog'liq muammolarni tushunish potentsial zaifliklarni bartaraf etishga yordam beradi va sayt so'nggi va eng xavfsiz TLS konfiguratsiyasidan foydalanayotganiga ishonch hosil qiladi.",
		resources: [],
		screenshot:
			'https://i.ibb.co/FmksZJt/Screenshot-from-2023-08-26-12-12-09.png',
	},
	{
		id: 'tls-client-support',
		title: 'TLS Handshake Simulation',
		description:
			"Bu turli mijozlar (brauzerlar, operatsion tizimlar) server bilan TLS qoʻl siqishini qanday amalga oshirishini simulyatsiya qiladi. Bu moslik muammolari va xavfli konfiguratsiyalarni aniqlashga yordam beradi.",
		use: '',
		resources: [
			{
				title: 'TLS Handshakes (via Cloudflare Learning)',
				link: 'https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/',
			},
			{
				title: 'SSL Test (via SSL Labs)',
				link: 'https://www.ssllabs.com/ssltest/',
			},
		],
		screenshot:
			'https://i.ibb.co/F7qRZkh/Screenshot-from-2023-08-26-12-11-28.png',
	},
	{
		id: 'screenshot',
		title: 'Screenshot',
		description:
			"Ushbu tekshiruv so'ralgan URL/IP hal qiladigan veb-sahifaning skrinshotini oladi va uni ko'rsatadi.",
		use: "Bu sizning brauzeringiz, IP yoki joylashuvingiz cheklovlarisiz berilgan veb-sayt qanday ko'rinishini ko'rish uchun foydali bo'lishi mumkin.",
		resources: [],
		screenshot:
			'https://i.ibb.co/2F0x8kP/Screenshot-from-2023-07-29-18-34-48.png',
	},
]

export const featureIntro = [
	"Muayyan veb-sayt yoki xostda OSINT tekshiruvini o'tkazishda bir nechta asosiy yo'nalishlarni ko'rib chiqish kerak. Ularning har biri tegishli maʼlumotlarni toʻplash uchun foydalanishingiz mumkin boʻlgan vositalar va usullarga havolalar bilan birga quyida hujjatlashtirilgan.",
  "Web-Check ushbu ma'lumotlarni yig'ish jarayonini avtomatlashtirishi mumkin, ammo natijalarni sharhlash va xulosa chiqarish sizga bog'liq",
]

export const about = [
	`Web-Check - bu veb-sayt/xost haqidagi ma'lumotlarni topish uchun kuchli vosita.
Asosiy falsafa oddiy: URL-manzilni Web-Check-ga taslim qiling va unga keng ko‘lamli ochiq ma’lumotlarni to‘plash, saralash va taqdim etish imkonini bering.`,

	`Hisobot potentsial hujum vektorlariga, mavjud xavfsizlik choralariga,
va sayt arxitekturasidagi ulanishlar tarmog'i.
Natijalar shuningdek, server javoblarini optimallashtirish, qayta yo'naltirishlarni sozlash,
cookie-fayllarni boshqarish yoki saytingiz uchun DNS yozuvlarini aniq sozlash.`,

	`Demak, siz dasturchi, tizim administratori, xavfsizlik tadqiqotchisi bo'lasizmi, kirish
tester yoki faqat ma'lum bir saytning asosiy texnologiyalarini kashf qilishdan manfaatdor
- Ishonchim komilki, siz buni asboblar qutingizga foydali qo'shimcha deb topasiz.`,
]

export const license = `MIT Litsenziyasi (MIT)
Copyright (c) Rustamov Istam <admin@riacoders.uz> 

Shu bilan ruxsatnoma nusxasini oladigan har qanday shaxsga bepul beriladi
ushbu dasturiy ta'minot va tegishli hujjat fayllari ("Dastur ta'minoti") bilan shug'ullanish uchun
Dasturiy ta'minotda cheklovlarsiz, shu jumladan huquqlarni cheklamagan holda
foydalanish, nusxalash, o'zgartirish, birlashtirish, nashr qilish, tarqatish, sub-litsenziyalash va/yoki sotish
Dasturiy ta'minotning nusxalari va dasturiy ta'minot taqdim etilgan shaxslarga ruxsat berish
quyidagi shartlarga rioya qilgan holda amalga oshirish uchun:

Yuqoridagi mualliflik huquqi to'g'risidagi eslatma va ushbu ruxsatnoma o'rnatish bilan birga bo'lishi kerak
Dasturiy ta'minotning nusxalari yoki muhim qismlari.

DASTURIY TA'MINOT "XAMDA" HAR QANDAY KAFOLAT BERILMAGAN, OZO'Z YOKI KO'RSATILGAN,
JUMLADAN SAVDOCHI QABUL QILISh KAFOLATLARI BILAN CHEKLANMAYDI,
MAXSUS MAQSAD VA BUZILMASH. HECH HOLDA MUALTARLAR YOKI MULLIYaT HUQUQI YO'Q
ENGLAR HARAKAT BO'LGAN HAR QANDAY DAVO, ZARAR YOKI BOSHQA MA'LUMOTLAR UCHUN JAVOB BO'LADI.
SHARTNOMA, SHUNORAT YOKI BOSHQA SHARTLARNING, SHUNDAN YOKI BILAN BOG'LIQ BO'LGAN
DASTURIY TA'MINOT YOKI FOYDALANISH YOKI DASTURIY TA'MINOTDAGI BOSHQA MUAMMOLAR.
`

export const supportUs = [
	'Web-Check cheklovsiz foydalanish uchun bepul.',
	"Barcha kod ochiq manbadir, shuning uchun siz o'zingizning namunangizni joylashtirishingiz, shuningdek, shaxsiy va tijorat sozlamalarida kodni o'zgartirishingiz, o'zgartirishingiz va tarqatishingiz mumkin.",
	"Veb-tekshiruvni ishga tushirish menga har oy ozgina pul sarflaydi, shuning uchun agar siz ilovani foydali deb bilsangiz, <a href='https://github.com/sponsors/Lissy93'>GitHub’da menga homiylik qiling< /a> agar imkoningiz bo'lsa. Hatto $1 yoki $2/oy ham davom etayotgan loyihaning joriy xarajatlarini qo'llab-quvvatlashda katta yordam bo'lardi.",
	"Aks holda, sizga yordam berishning boshqa usullari mavjud, masalan, <a href='https://github.com/Lissy93/web-check'>GitHub repo</a> ga jalb qilish so‘rovini yuborish yoki ko‘rib chiqish, bizga ijobiy ovoz berish <a href='https://www.producthunt.com/posts/web-check'>Mahsulot ovlash</a> saytida yoki tarmog'ingizga ulashish orqali.",
	"Ammo hech narsa qilishga majbur emasman, chunki bu ilova (va mening barcha boshqa loyihalarim) har doim 100% bepul va ochiq manba bo'lib qoladi va men boshqariladigan misollar uzoq vaqt davomida ochiq va mavjud bo'lishini ta'minlash uchun qo'limdan kelganini qilaman. mumkin :)",
]

export const fairUse = [
	"Iltimos, ushbu vositadan mas'uliyat bilan foydalaning. Uni skanerlash uchun ruxsatingiz bo'lmagan xostlar uchun ishlatmang. Undan xizmatlarga hujum qilish yoki buzish sxemasining bir qismi sifatida foydalanmang.",
	"Suiiste'mollikning oldini olish uchun so'rovlar stavka bilan cheklanishi mumkin. Agar siz ko'proq o'tkazish qobiliyatini oshirishingiz kerak bo'lsa, iltimos, o'zingizning namunangizni joylashtiring.",
	"Ushlab turish vaqti yoki mavjudlik kafolati yo'q. Agar xizmat mavjudligiga ishonch hosil qilishingiz kerak bo'lsa, iltimos, o'zingizning namunangizni joylashtiring.",
	"Iltimos, adolatli foydalaning, chunki haddan tashqari foydalanish lambda funktsiyasi kreditlarini tezda yo'qotadi va bu xizmatni boshqalar uchun mavjud bo'lmaydi (va/yoki mening bank hisobimni bo'shatadi!).",
]

export default docs
