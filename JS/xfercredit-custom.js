/**
 * xfercredit-custom.js: Site-specific JavaScript code for use only on transfercredit.wsu.edu.
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
// TABLE OF CONTENTS
// -----------------
// §1: DOM-ready code execution section......................................................000
// §2: Window loaded event binding section...................................................000
// §3: Lexically scoped function section.....................................................000
//     §3.1: getNewNameOpts(…)...............................................................000
//     §3.2: setupEnhancedUploadChain(…).....................................................000
//     §3.3: initInstitutionSelectors(…).....................................................000
//     §3.4: setupInstitutionSelectors(…)....................................................000
////////////////////////////////////////////////////////////////////////////////////////////////////

( function ( $ ) {

////////////////////////////////////////////////////////////////////////////////////////////////////
// §1: DOM-ready code execution section

	$( function () {
		if( $( 'div.gform_body' ).length > 0 ) {
			setupInstitutionSelectors( '.oue-gf-instn-locn', '.oue-gf-instn-name' );
			setupEnhancedUploadChain( '.oue-gf-upload-chain-enhncd', '.oue-gf-upload-chain-extra' );
		}
	} );

////////////////////////////////////////////////////////////////////////////////////////////////////
// §2: Window loaded event binding section

	$( window ).on( 'load', function () {
		if( $( 'div.gform_body' ).length > 0 ) {
			initInstitutionSelectors( '.oue-gf-instn-locn', '.oue-gf-instn-name' );
		}
	});

////////////////////////////////////////////////////////////////////////////////////////////////////
// §3: Lexically scoped function section


	////////////////////////////////////////////////////////////////////////////////////////////
	// §3.1: getNewNameOpts(…)

	/**
	 * Get institution name options based on a selected location.
	 *
	 * @param {string} slctdLocation - Either the state U.S. selected or the international location
	 *     option.
	 *
	 * @return {string} The new options for institution names.
	 */
	function getNewNameOpts( slctdLocation ) {
		var newOpts = null;

		switch(slctdLocation) {
			case "Alabama":
				newOpts = {
					"": "",
					"Alabama Agricultural and Mechanical University": "Alabama Agricultural and Mec\
hanical University",
					"Alabama Christian School of Religion": "Alabama Christian School of Religion",
					"Alabama Southern Community College": "Alabama Southern Community College",
					"Alabama State University": "Alabama State University",
					"Amridge University": "Amridge University",
					"Athens State College": "Athens State College",
					"Auburn University": "Auburn University",
					"Auburn University at Montgomery": "Auburn University at Montgomery",
					"Bevill State Community College": "Bevill State Community College",
					"Birmingham-Southern College": "Birmingham-Southern College",
					"Bishop State Community College": "Bishop State Community College",
					"Brewer State Junior College": "Brewer State Junior College",
					"Calhoun Community College": "Calhoun Community College",
					"Central Alabama Community College": "Central Alabama Community College",
					"Chattahoochee Valley State Community College": "Chattahoochee Valley State Com\
munity College",
					"Community College of The Air Force": "Community College of The Air Force",
					"Concordia College": "Concordia College",
					"Enterprise State Community College": "Enterprise State Community College",
					"Faulkner University": "Faulkner University",
					"Gadsden State Community College": "Gadsden State Community College",
					"George C Wallace State Community College": "George C Wallace State Community C\
ollege",
					"Huntingdon College": "Huntingdon College",
					"International Bible College": "International Bible College",
					"Jacksonville State University": "Jacksonville State University",
					"James H Faulkner State Junior College": "James H Faulkner State Junior College\
",
					"Jefferson Davis State Junior College": "Jefferson Davis State Junior College",
					"Jefferson State Community College": "Jefferson State Community College",
					"Judson College": "Judson College",
					"Lawson State Community College": "Lawson State Community College",
					"Livingston University": "Livingston University",
					"Lurleen B Wallace State Junior College": "Lurleen B Wallace State Junior Colle\
ge",
					"Marion Military Institute": "Marion Military Institute",
					"Miles College": "Miles College",
					"Northeast Alabama State Junior College": "Northeast Alabama State Junior Colle\
ge",
					"Northwest Alabama State Junior College": "Northwest Alabama State Junior Colle\
ge",
					"Northwest Shoals Community College": "Northwest Shoals Community College",
					"Oakwood College": "Oakwood College",
					"Patrick Henry State Junior College": "Patrick Henry State Junior College",
					"Phillips Junior College": "Phillips Junior College",
					"Rets Electronic Institute": "Rets Electronic Institute",
					"Samford University": "Samford University",
					"Selma University": "Selma University",
					"Shelton State Community College": "Shelton State Community College",
					"Shoals Community College": "Shoals Community College",
					"Snead State Junior College": "Snead State Junior College",
					"Southeastern Bible College": "Southeastern Bible College",
					"Southern Christian University": "Southern Christian University",
					"Southern Junior College of Business": "Southern Junior College of Business",
					"Southern Union State Junior College": "Southern Union State Junior College",
					"Spring Hill College": "Spring Hill College",
					"Stillman College": "Stillman College",
					"Talladega College": "Talladega College",
					"Troy State University": "Troy State University",
					"Troy State University at Dothan": "Troy State University at Dothan",
					"Troy State University in Montgomery": "Troy State University in Montgomery",
					"Troy University": "Troy University",
					"Tuskegee University": "Tuskegee University",
					"UAB Walker College": "UAB Walker College",
					"Unites States Sports Academy": "Unites States Sports Academy",
					"University of Alabama": "University of Alabama",
					"University of Alabama at Birmingham": "University of Alabama at Birmingham",
					"University of Alabama in Huntsville": "University of Alabama in Huntsville",
					"University of Mobile": "University of Mobile",
					"University of Montevallo": "University of Montevallo",
					"University of North Alabama": "University of North Alabama",
					"University of South Alabama": "University of South Alabama",
					"University of West Alabama": "University of West Alabama",
					"Walker College": "Walker College",
					"Wallace State Community College": "Wallace State Community College",
					"Other": "Other"
				};
				break;
			case "Alaska":
				newOpts = {
					"": "",
					"Alaska Bible College": "Alaska Bible College",
					"Alaska Pacific University": "Alaska Pacific University",
					"Career Academy": "Career Academy",
					"Chukchi College": "Chukchi College",
					"Covenant Life College": "Covenant Life College",
					"Ilisagvik College": "Ilisagvik College",
					"Kenai Peninsula College": "Kenai Peninsula College",
					"Kodiak College": "Kodiak College",
					"Kuskokwim College": "Kuskokwim College",
					"Matanuska-Susitna College": "Matanuska-Susitna College",
					"Northwest College": "Northwest College",
					"Prince William Sound Community College": "Prince William Sound Community Colle\
ge",
					"Sheldon Jackson College": "Sheldon Jackson College",
					"Tanana Community College": "Tanana Community College",
					"University of Alaska": "University of Alaska",
					"University of Alaska Fairbanks": "University of Alaska Fairbanks",
					"University of Alaska Southeast": "University of Alaska Southeast",
					"University of Alaska Southeast Ketchikan Campus": "University of Alaska Southe\
ast Ketchikan Campus",
					"University of Alaska Southeast Sitka Campus": "University of Alaska Southeast \
Sitka Campus",
					"Other": "Other"
				};
				break;
			case "Arkansas":
				newOpts = {
					"": "",
					"Arkansas Baptist College": "Arkansas Baptist College",
					"Arkansas Northeastern College": "Arkansas Northeastern College",
					"Arkansas State University": "Arkansas State University",
					"Arkansas State University - Newport": "Arkansas State University - Newport",
					"Arkansas State University Beebe Campus": "Arkansas State University Beebe Camp\
us",
					"Arkansas State University Mountain Home": "Arkansas State University Mountain \
Home",
					"Arkansas Tech University": "Arkansas Tech University",
					"Black River Technical College": "Black River Technical College",
					"Capital City Junior College": "Capital City Junior College",
					"Central Baptist College": "Central Baptist College",
					"College of the Ouachitas": "College of the Ouachitas",
					"Crowley's Ridge Christian College": "Crowley's Ridge Christian College",
					"East Arkansas Community College": "East Arkansas Community College",
					"Garland County Community College": "Garland County Community College",
					"Harding University": "Harding University",
					"Henderson State University": "Henderson State University",
					"Hendrix College": "Hendrix College",
					"John Brown University": "John Brown University",
					"Lyon College": "Lyon College",
					"Mid South Community College": "Mid South Community College",
					"Mississippi County Community College": "Mississippi County Community College",
					"National Educ Ctr-Arkansas Coll of Tech Campus": "National Educ Ctr-Arkansas C\
oll of Tech Campus",
					"National Park Community College": "National Park Community College",
					"North Arkansas Community College": "North Arkansas Community College",
					"Northwest Arkansas Community College": "Northwest Arkansas Community College",
					"Ouachita Baptist University": "Ouachita Baptist University",
					"Ozarka College": "Ozarka College",
					"Philander Smith College": "Philander Smith College",
					"Phillips County Community College": "Phillips County Community College",
					"Pulaski Technical College": "Pulaski Technical College",
					"Rich Mountain Community College": "Rich Mountain Community College",
					"Shorter College": "Shorter College",
					"Southeast Arkansas College": "Southeast Arkansas College",
					"Southern Arkansas University": "Southern Arkansas University",
					"Southern Arkansas University, El Dorado Branch": "Southern Arkansas University\
, El Dorado Branch",
					"Southern Arkansas University, Technical Branch": "Southern Arkansas University\
, Technical Branch",
					"University of Arkansas": "University of Arkansas",
					"University of Arkansas - Fort Smith": "University of Arkansas - Fort Smith",
					"University of Arkansas at Little Rock": "University of Arkansas at Little Rock\
",
					"University of Arkansas at Monticello": "University of Arkansas at Monticello",
					"University of Arkansas at Pine Bluff": "University of Arkansas at Pine Bluff",
					"University of Arkansas CC at Batesville": "University of Arkansas CC at Batesv\
ille",
					"University of Arkansas Community College Morrilton": "University of Arkansas C\
ommunity College Morrilton",
					"University of Central Arkansas": "University of Central Arkansas",
					"University of The Ozarks": "University of The Ozarks",
					"Westark Community College": "Westark Community College",
					"Williams Baptist College": "Williams Baptist College",
					"Other": "Other"
				};
				break;
			case "American Samoa":
				newOpts = {
					"": "",
					"American Samoa Community College": "American Samoa Community College",
					"Other": "Other"
				};
				break;
			case "Arizona":
				newOpts = {
					"": "",
					"American Graduate Sch of International Management": "American Graduate Sch of \
International Management",
					"American Indian College of The Assemblies of God": "American Indian College of\
 The Assemblies of God",
					"Argosy University": "Argosy University",
					"Arizona Christian University": "Arizona Christian University",
					"Arizona College of The Bible": "Arizona College of The Bible",
					"Arizona State University": "Arizona State University",
					"Arizona Western College": "Arizona Western College",
					"Central Arizona College": "Central Arizona College",
					"Chandler-Gilbert Community College": "Chandler-Gilbert Community College",
					"Chandler-Gilbert Community College Center": "Chandler-Gilbert Community Colleg\
e Center",
					"Chaparral Career College": "Chaparral Career College",
					"Cochise College": "Cochise College",
					"Coconino County Community College": "Coconino County Community College",
					"Devry Institute of Technology": "Devry Institute of Technology",
					"Devry University": "Devry University",
					"Dine College": "Dine College",
					"Eastern Arizona College": "Eastern Arizona College",
					"Embry Riddle Aeronautical University": "Embry Riddle Aeronautical University",
					"Estrella Mountain Community College": "Estrella Mountain Community College",
					"Everest College": "Everest College",
					"Gateway Community College": "Gateway Community College",
					"Glendale Community College": "Glendale Community College",
					"Grand Canyon University": "Grand Canyon University",
					"Lamson College": "Lamson College",
					"Mesa Community College": "Mesa Community College",
					"Midwestern University": "Midwestern University",
					"Mohave Community College": "Mohave Community College",
					"Navajo Community College": "Navajo Community College",
					"Northcentral University": "Northcentral University",
					"Northern Arizona University": "Northern Arizona University",
					"Northland Pioneer College": "Northland Pioneer College",
					"Paradise Valley Community College Center": "Paradise Valley Community College \
Center",
					"Penn Foster College": "Penn Foster College",
					"Phoenix College": "Phoenix College",
					"Pima Community College": "Pima Community College",
					"Prescott College": "Prescott College",
					"Rio Salado Community College": "Rio Salado Community College",
					"Scottsdale Community College": "Scottsdale Community College",
					"South Mountain Community College": "South Mountain Community College",
					"Southwest Coll of Naturopathic Med & Health Scis": "Southwest Coll of Naturopa\
thic Med & Health Scis",
					"Thunderbird School of Global Management": "Thunderbird School of Global Manage\
ment",
					"Tucson College": "Tucson College",
					"University of Advancing Technology": "University of Advancing Technology",
					"University of Arizona": "University of Arizona",
					"University of Phoenix": "University of Phoenix",
					"Western International University": "Western International University",
					"Yavapai College": "Yavapai College",
					"Other": "Other"
				};
				break;
			case "California":
				newOpts = {
					"": "",
					"Academy of Art University": "Academy of Art University",
					"Allan Hancock College": "Allan Hancock College",
					"Alliant International University - San Diego": "Alliant International Universi\
ty - San Diego",
					"Ambassador College": "Ambassador College",
					"American Academy of Dramatic Arts West": "American Academy of Dramatic Arts We\
st",
					"American Baptist Seminary of The West": "American Baptist Seminary of The West\
",
					"American Conservatory Theatre": "American Conservatory Theatre",
					"American Film Inst Ctr Advanced Film & TV Studies": "American Film Inst Ctr Ad\
vanced Film & TV Studies",
					"American Jewish University": "American Jewish University",
					"American River College": "American River College",
					"Antelope Valley College": "Antelope Valley College",
					"Antioch University Southern California": "Antioch University Southern Californ\
ia",
					"Armstrong College": "Armstrong College",
					"Art Center College of Design": "Art Center College of Design",
					"Art Institute of California - Orange": "Art Institute of California - Orange",
					"Art Institute of California - Hollywood": "Art Institute of California - Holly\
wood",
					"Art Institute of California - San Diego": "Art Institute of California - San D\
iego",
					"Art Institute of Southern California": "Art Institute of Southern California",
					"Azusa Pacific University": "Azusa Pacific University",
					"Bakersfield College": "Bakersfield College",
					"Barstow College": "Barstow College",
					"Bay-Valley Tech": "Bay-Valley Tech",
					"Berkeley City College": "Berkeley City College",
					"Bethany Bible College": "Bethany Bible College",
					"Biola University": "Biola University",
					"Brandman University": "Brandman University",
					"Brooks College": "Brooks College",
					"Brooks Institute of Photography": "Brooks Institute of Photography",
					"Butte College": "Butte College",
					"Cabrillo College": "Cabrillo College",
					"California Baptist University": "California Baptist University",
					"California Coast University": "California Coast University",
					"California College for Health Sciences": "California College for Health Scienc\
es",
					"California College of Arts": "California College of Arts",
					"California College of Podiatric Medicine": "California College of Podiatric Me\
dicine",
					"California Family Study Center": "California Family Study Center",
					"California Institute of Integral Studies": "California Institute of Integral S\
tudies",
					"California Institute of Technology": "California Institute of Technology",
					"California Institute of The Arts": "California Institute of The Arts",
					"California Lutheran University": "California Lutheran University",
					"California Maritime Academy": "California Maritime Academy",
					"California Northstate University": "California Northstate University",
					"California Polytechnic State Univ, San Luis Obispo": "California Polytechnic S\
tate Univ, San Luis Obispo",
					"California Sch of Prof Psychology, Los Angeles": "California Sch of Prof Psych\
ology, Los Angeles",
					"California State College, Sonoma": "California State College, Sonoma",
					"California State Polytechnic University, Pomona": "California State Polytechni\
c University, Pomona",
					"California State University, Bakersfield": "California State University, Baker\
sfield",
					"California State University, Channel Islands": "California State University, C\
hannel Islands",
					"California State University, Chico": "California State University, Chico",
					"California State University, Dominguez Hills": "California State University, D\
ominguez Hills",
					"California State University, East Bay": "California State University, East Bay\
",
					"California State University, Fresno": "California State University, Fresno",
					"California State University, Fullerton": "California State University, Fullert\
on",
					"California State University, Hayward": "California State University, Hayward",
					"California State University, Long Beach": "California State University, Long B\
each",
					"California State University, Los Angeles": "California State University, Los A\
ngeles",
					"California State University, Monterey Bay": "California State University, Mont\
erey Bay",
					"California State University, Northridge": "California State University, Northr\
idge",
					"California State University, Sacramento": "California State University, Sacram\
ento",
					"California State University, San Bernardino": "California State University, Sa\
n Bernardino",
					"California State University, San Marcos": "California State University, San Ma\
rcos",
					"California State University, Stanislaus": "California State University, Stanis\
laus",
					"Cañada College": "Cañada College",
					"Carrington College - Sacramento": "Carrington College - Sacramento",
					"Carrington College - San Leandro": "Carrington College - San Leandro",
					"Carrington College - Stockton": "Carrington College - Stockton",
					"Cerritos College": "Cerritos College",
					"Cerro Coso Community College": "Cerro Coso Community College",
					"Chabot College": "Chabot College",
					"Chaffey College": "Chaffey College",
					"Chapman University": "Chapman University",
					"Chouinard Art Institute": "Chouinard Art Institute",
					"Christ College Irvine": "Christ College Irvine",
					"Church Divinity School of The Pacific": "Church Divinity School of The Pacific\
",
					"Citrus College": "Citrus College",
					"City College of San Francisco": "City College of San Francisco",
					"Claremont Graduate School": "Claremont Graduate School",
					"Claremont McKenna College": "Claremont McKenna College",
					"Claremont School of Theology": "Claremont School of Theology",
					"Cleveland Chiropractic College": "Cleveland Chiropractic College",
					"Coastline Community College": "Coastline Community College",
					"Cogswell Polytechnical College": "Cogswell Polytechnical College",
					"Coleman College": "Coleman College",
					"College for Developmental Studies": "College for Developmental Studies",
					"College of Alameda": "College of Alameda",
					"College of Marin": "College of Marin",
					"College of Oceaneering": "College of Oceaneering",
					"College of San Mateo": "College of San Mateo",
					"College of The Canyons": "College of The Canyons",
					"College of The Desert": "College of The Desert",
					"College of The Redwoods": "College of The Redwoods",
					"College of The Sequoias": "College of The Sequoias",
					"College of The Siskiyous": "College of The Siskiyous",
					"Columbia College": "Columbia College",
					"Columbia College, Los Angeles": "Columbia College, Los Angeles",
					"Compton Community College": "Compton Community College",
					"Concordia University": "Concordia University",
					"Consortium of The California State University": "Consortium of The California \
State University",
					"Contra Costa College": "Contra Costa College",
					"Copper Mountain College": "Copper Mountain College",
					"Cosumnes River College": "Cosumnes River College",
					"Crafton Hills College": "Crafton Hills College",
					"Cuesta College": "Cuesta College",
					"Cuyamaca College": "Cuyamaca College",
					"Cypress College": "Cypress College",
					"Deanza College": "Deanza College",
					"Deep Springs College": "Deep Springs College",
					"Deep Springs College": "Deep Springs College",
					"Defense Language Institute, Foreign Language Center": "Defense Language Instit\
ute, Foreign Language Center",
					"Devry Institute of Technology": "Devry Institute of Technology",
					"Devry University": "Devry University",
					"Devry University": "Devry University",
					"Dharma Realm Budd Un": "Dharma Realm Budd Un",
					"Diablo Valley College": "Diablo Valley College",
					"Domincan University of California": "Domincan University of California",
					"Dominican School of Philosophy and Theology": "Dominican School of Philosophy \
and Theology",
					"Dominquez Seminary Clarentian Junior Se": "Dominquez Seminary Clarentian Junio\
r Se",
					"Don Bosco Technical Institute": "Don Bosco Technical Institute",
					"D-Q University": "D-Q University",
					"East Los Angeles College": "East Los Angeles College",
					"El Camino College": "El Camino College",
					"Empire College": "Empire College",
					"Evergreen Valley College": "Evergreen Valley College",
					"Fashion Institute of Design and Merchandising": "Fashion Institute of Design a\
nd Merchandising",
					"Feather River College": "Feather River College",
					"Folsom Lake College": "Folsom Lake College",
					"Foothill College": "Foothill College",
					"Fresno City College": "Fresno City College",
					"Fresno Pacific College": "Fresno Pacific College",
					"Fuller Theological Seminary": "Fuller Theological Seminary",
					"Fullerton College": "Fullerton College",
					"Gavilan College": "Gavilan College",
					"Glendale Community College": "Glendale Community College",
					"Golden Gate University": "Golden Gate University",
					"Golden West College": "Golden West College",
					"Grantham College of Engineering": "Grantham College of Engineering",
					"Grossmont College": "Grossmont College",
					"Hartnell College": "Hartnell College",
					"Harvey Mudd College": "Harvey Mudd College",
					"Heald 4C's College": "Heald 4C's College",
					"Heald Business College, Hayward": "Heald Business College, Hayward",
					"Heald Business College, Oakland": "Heald Business College, Oakland",
					"Heald Business College, Rancho Cordova": "Heald Business College, Rancho Cordo\
va",
					"Heald Business College, Rohnert Park": "Heald Business College, Rohnert Park",
					"Heald Business College, San Diego": "Heald Business College, San Diego",
					"Heald Business College, San Francisco": "Heald Business College, San Francisco\
",
					"Heald Business College, San Jose": "Heald Business College, San Jose",
					"Heald Business College, Walnut Creek": "Heald Business College, Walnut Creek",
					"Heald Institute of Technology, Hayward": "Heald Institute of Technology, Haywa\
rd",
					"Heald Institute of Technology, Martinez": "Heald Institute of Technology, Mart\
inez",
					"Heald Institute of Technology, Rancho Cordova": "Heald Institute of Technology\
, Rancho Cordova",
					"Heald Institute of Technology, San Francisco": "Heald Institute of Technology,\
 San Francisco",
					"Heald Institute of Technology, San Jose": "Heald Institute of Technology, San \
Jose",
					"Hebrew Union College - Jewish Institute of Religion": "Hebrew Union College - \
Jewish Institute of Religion",
					"Holy Names College": "Holy Names College",
					"Hope International University": "Hope International University",
					"Humboldt State University": "Humboldt State University",
					"Humphreys College": "Humphreys College",
					"Immaculate Heart College": "Immaculate Heart College",
					"Imperial Valley College": "Imperial Valley College",
					"Irvine Valley College": "Irvine Valley College",
					"ITT Technical Institute": "ITT Technical Institute",
					"John F Kennedy University": "John F Kennedy University",
					"Kelsey-Jenney Business College": "Kelsey-Jenney Business College",
					"L.I.F.E. Bible College": "L.I.F.E. Bible College",
					"La Sierra University": "La Sierra University",
					"Lake Tahoe Community College": "Lake Tahoe Community College",
					"Laney College": "Laney College",
					"Language Center Pacific": "Language Center Pacific",
					"Las Positas College": "Las Positas College",
					"Lassen College": "Lassen College",
					"Life Pacific College": "Life Pacific College",
					"Lincoln University": "Lincoln University",
					"Loma Linda University": "Loma Linda University",
					"Lone Mountain College": "Lone Mountain College",
					"Long Beach City College": "Long Beach City College",
					"Los Angeles Business College": "Los Angeles Business College",
					"Los Angeles City College": "Los Angeles City College",
					"Los Angeles County Coll of Nursing & Allied Health": "Los Angeles County Coll \
of Nursing & Allied Health",
					"Los Angeles Harbor College": "Los Angeles Harbor College",
					"Los Angeles Mission College": "Los Angeles Mission College",
					"Los Angeles Pierce College": "Los Angeles Pierce College",
					"Los Angeles Southwest College": "Los Angeles Southwest College",
					"Los Angeles Trade-Technical College": "Los Angeles Trade-Technical College",
					"Los Angeles Valley College": "Los Angeles Valley College",
					"Los Medanos College": "Los Medanos College",
					"Louise Salinger Academy of Fashion": "Louise Salinger Academy of Fashion",
					"Loyola Marymount University": "Loyola Marymount University",
					"Marymount California University": "Marymount California University",
					"Mendocino College": "Mendocino College",
					"Menlo College": "Menlo College",
					"Mennonite Brethren Biblical Seminary": "Mennonite Brethren Biblical Seminary",
					"Merced College": "Merced College",
					"Merritt College": "Merritt College",
					"Mills College": "Mills College",
					"Mira Costa College": "Mira Costa College",
					"Mission College": "Mission College",
					"Modesto Junior College": "Modesto Junior College",
					"Monterey Institute of International Studies": "Monterey Institute of Internati\
onal Studies",
					"Monterey Peninsula College": "Monterey Peninsula College",
					"Moorpark College": "Moorpark College",
					"Moreno Valley College": "Moreno Valley College",
					"Mount Saint Mary's College": "Mount Saint Mary's College",
					"MT San Antonio College": "MT San Antonio College",
					"MT San Jacinto College": "MT San Jacinto College",
					"MTI College": "MTI College",
					"Napa Valley College": "Napa Valley College",
					"National Polytechnic College of Science": "National Polytechnic College of Sci\
ence",
					"National Technical Schools": "National Technical Schools",
					"National University, Administrative Center": "National University, Administrat\
ive Center",
					"National University, San Diego": "National University, San Diego",
					"National Hispanic University": "National Hispanic University",
					"Naval Postgraduate School": "Naval Postgraduate School",
					"New College of California": "New College of California",
					"Norco College": "Norco College",
					"Northrop University": "Northrop University",
					"Notre Dame De Namur University": "Notre Dame De Namur University",
					"Occidental College": "Occidental College",
					"Ohlone College": "Ohlone College",
					"Orange Coast College": "Orange Coast College",
					"Otis Art Institute of Parsons School of Design": "Otis Art Institute of Parson\
s School of Design",
					"Oxnard College": "Oxnard College",
					"Pacific Coast Junior College": "Pacific Coast Junior College",
					"Pacific Graduate School of Psychology": "Pacific Graduate School of Psychology\
",
					"Pacific Lutheran Theological Seminary": "Pacific Lutheran Theological Seminary\
",
					"Pacific Oaks College and Children's School": "Pacific Oaks College and Childre\
n's School",
					"Pacific Union College": "Pacific Union College",
					"Palo Verde College": "Palo Verde College",
					"Palomar College": "Palomar College",
					"Pasadena City College": "Pasadena City College",
					"Patten University": "Patten University",
					"Pepperdine University": "Pepperdine University",
					"Phillips Junior College - Condie Campus": "Phillips Junior College - Condie Ca\
mpus",
					"Pitzer College": "Pitzer College",
					"Point Loma Nazarene College": "Point Loma Nazarene College",
					"Pomona College": "Pomona College",
					"Porterville College": "Porterville College",
					"Quebec University": "Quebec University",
					"Queen of The Holy Rosary": "Queen of The Holy Rosary",
					"Rand Graduate School of Policy Studies": "Rand Graduate School of Policy Studi\
es",
					"Reedley College": "Reedley College",
					"Rio Hondo College": "Rio Hondo College",
					"Riverside City College": "Riverside City College",
					"Russell College": "Russell College",
					"Sacramento City College": "Sacramento City College",
					"Saddleback College": "Saddleback College",
					"Saint John's Seminary": "Saint John's Seminary",
					"Saint John's Seminary College": "Saint John's Seminary College",
					"Saint Mary's College of California": "Saint Mary's College of California",
					"Saint Patrick's Seminary": "Saint Patrick's Seminary",
					"Samuel Merritt College": "Samuel Merritt College",
					"San Bernardino Valley College": "San Bernardino Valley College",
					"San Diego Christian College": "San Diego Christian College",
					"San Diego City College": "San Diego City College",
					"San Diego Mesa College": "San Diego Mesa College",
					"San Diego Miramar College": "San Diego Miramar College",
					"San Diego State University": "San Diego State University",
					"San Francisco Art Institute": "San Francisco Art Institute",
					"San Francisco College of Mortuary Science": "San Francisco College of Mortuary\
 Science",
					"San Francisco Conservatory of Music": "San Francisco Conservatory of Music",
					"San Francisco State University": "San Francisco State University",
					"San Francisco Theological Seminary": "San Francisco Theological Seminary",
					"San Joaquin Delta College": "San Joaquin Delta College",
					"San Joaquin Valley College": "San Joaquin Valley College",
					"San Jose Christian College": "San Jose Christian College",
					"San Jose City College": "San Jose City College",
					"San Jose State University": "San Jose State University",
					"Santa Ana College": "Santa Ana College",
					"Santa Barbara City College": "Santa Barbara City College",
					"Santa Clara University": "Santa Clara University",
					"Santa Monica College": "Santa Monica College",
					"Santa Rosa Junior College": "Santa Rosa Junior College",
					"Santiago Canyon College": "Santiago Canyon College",
					"Saybrook Institute": "Saybrook Institute",
					"School of Theology at Claremont": "School of Theology at Claremont",
					"Scripps College": "Scripps College",
					"Shasta Bible College": "Shasta Bible College",
					"Shasta College": "Shasta College",
					"Sierra College": "Sierra College",
					"Simpson University": "Simpson University",
					"Skyline College": "Skyline College",
					"Soka University of America": "Soka University of America",
					"Solano Community College": "Solano Community College",
					"Sonoma State University": "Sonoma State University",
					"Southern California College of Optometry": "Southern California College of Opt\
ometry",
					"Southern California Institute of Architecture": "Southern California Institute\
 of Architecture",
					"Southern California Institute of Technology": "Southern California Institute o\
f Technology",
					"Southern California University of Health Sciences": "Southern California Unive\
rsity of Health Sciences",
					"Southwestern College": "Southwestern College",
					"St Joseph's College": "St Joseph's College",
					"Stanford University": "Stanford University",
					"Starr King School for The Ministry": "Starr King School for The Ministry",
					"Taft College": "Taft College",
					"The Master's College": "The Master's College",
					"Thomas Aquinas College": "Thomas Aquinas College",
					"Trident University International": "Trident University International",
					"United College of Business": "United College of Business",
					"United States International University": "United States International Universi\
ty",
					"University of California, Berkeley": "University of California, Berkeley",
					"University of California, Davis": "University of California, Davis",
					"University of California, Irvine": "University of California, Irvine",
					"University of California, Los Angeles": "University of California, Los Angeles\
",
					"University of California, Merced": "University of California, Merced",
					"University of California, Riverside": "University of California, Riverside",
					"University of California, San Diegio - Extension": "University of California, \
San Diegio - Extension",
					"University of California, San Diego": "University of California, San Diego",
					"University of California, San Francisco": "University of California, San Franc\
isco",
					"University of California, Santa Barbara": "University of California, Santa Bar\
bara",
					"University of California, Santa Cruz": "University of California, Santa Cruz",
					"University of Laverne": "University of Laverne",
					"University of Phoenix, San Diego Campus": "University of Phoenix, San Diego Ca\
mpus",
					"University of Redlands": "University of Redlands",
					"University of San Diego": "University of San Diego",
					"University of San Francisco": "University of San Francisco",
					"University of Southern California": "University of Southern California",
					"University of The Pacific": "University of The Pacific",
					"University of The Pacific McGeorge School of Law": "University of The Pacific \
McGeorge School of Law",
					"Vanguard University": "Vanguard University",
					"Ventura College": "Ventura College",
					"Victor Valley College": "Victor Valley College",
					"Watterson College": "Watterson College",
					"West Coast Christian College": "West Coast Christian College",
					"West Coast University": "West Coast University",
					"West Hills Community College": "West Hills Community College",
					"West Los Angeles College": "West Los Angeles College",
					"West Valley College": "West Valley College",
					"Western Career College": "Western Career College",
					"Western Career College Antioch": "Western Career College Antioch",
					"Western State Univ College of Law of Orange County": "Western State Univ Colle\
ge of Law of Orange County",
					"Western State University College of Law": "Western State University College of\
 Law",
					"Western University of Health Sciences": "Western University of Health Sciences\
",
					"Westminster Theological Seminary in California": "Westminster Theological Semi\
nary in California",
					"Westmont College": "Westmont College",
					"Whittier College": "Whittier College",
					"William Jessup University": "William Jessup University",
					"Woodbury University": "Woodbury University",
					"Woodland Community College": "Woodland Community College",
					"World College West": "World College West",
					"Wright Institute": "Wright Institute",
					"Yeshiva University Los Angeles": "Yeshiva University Los Angeles",
					"Yuba College": "Yuba College",
					"Other": "Other"
				};
				break;
			case "Colorado":
				newOpts = {
					"": "",
					"Adams State University": "Adams State University",
					"Aims Community College": "Aims Community College",
					"American College Paris": "American College Paris",
					"Arapahoe Community College": "Arapahoe Community College",
					"Art Institute of Colorado": "Art Institute of Colorado",
					"Belleview College": "Belleview College",
					"Bel-Rea Institute of Animal Technology": "Bel-Rea Institute of Animal Technolo\
gy",
					"Beth-El College of Nursing": "Beth-El College of Nursing",
					"Blair Junior College": "Blair Junior College",
					"Cherry Creek Bapt College": "Cherry Creek Bapt College",
					"College for Financial Planning": "College for Financial Planning",
					"Colorado Bible College": "Colorado Bible College",
					"Colorado Christian University": "Colorado Christian University",
					"Colorado College": "Colorado College",
					"Colorado Mesa University": "Colorado Mesa University",
					"Colorado Mesa University": "Colorado Mesa University",
					"Colorado Mountain Coll System, Timberline Campus": "Colorado Mountain Coll Sys\
tem, Timberline Campus",
					"Colorado Mountain College": "Colorado Mountain College",
					"Colorado Mountain College System, Alpine Campus": "Colorado Mountain College S\
ystem, Alpine Campus",
					"Colorado Northwestern Community College": "Colorado Northwestern Community Col\
lege",
					"Colorado State University": "Colorado State University",
					"Colorado State University Global Campus": "Colorado State University Global Ca\
mpus",
					"Colorado State University-Pueblo": "Colorado State University-Pueblo",
					"Colorado Technical University": "Colorado Technical University",
					"Colorado Women's College": "Colorado Women's College",
					"Community College of Aurora": "Community College of Aurora",
					"Community College of Denver": "Community College of Denver",
					"Denver Baptist Bible College": "Denver Baptist Bible College",
					"Denver Business College": "Denver Business College",
					"Denver Conservative Baptist Seminary": "Denver Conservative Baptist Seminary",
					"Denver Institute of Technology": "Denver Institute of Technology",
					"Denver School of Nursing": "Denver School of Nursing",
					"Denver Technical College": "Denver Technical College",
					"Devry University": "Devry University",
					"Electronic Technical Institute": "Electronic Technical Institute",
					"Fort Lewis College": "Fort Lewis College",
					"Front Range Community College": "Front Range Community College",
					"Iliff School of Theology": "Iliff School of Theology",
					"Johnson & Wales University": "Johnson & Wales University",
					"Jones International University": "Jones International University",
					"Lamar Community College": "Lamar Community College",
					"Loretto Heights College": "Loretto Heights College",
					"Metropolitan State College of Denver": "Metropolitan State College of Denver",
					"Morgan Community College": "Morgan Community College",
					"Naropa Institute": "Naropa Institute",
					"National College, Colorado Springs": "National College, Colorado Springs",
					"National College, Denver": "National College, Denver",
					"National College, Pueblo": "National College, Pueblo",
					"National Technological University": "National Technological University",
					"Nazarene Bible College": "Nazarene Bible College",
					"Northeastern Junior College": "Northeastern Junior College",
					"Otero Junior College": "Otero Junior College",
					"Parks Junior College": "Parks Junior College",
					"Pikes Peak Community College": "Pikes Peak Community College",
					"Pueblo Community College": "Pueblo Community College",
					"Ravencrest Bible School": "Ravencrest Bible School",
					"Red Rocks Community College": "Red Rocks Community College",
					"Regis University": "Regis University",
					"Rocky Mountain College of Art and Design": "Rocky Mountain College of Art and \
Design",
					"St Thomas Seminary": "St Thomas Seminary",
					"State of CO School of Mines-Conference Services": "State of CO School of Mines\
-Conference Services",
					"Trinidad State Junior College": "Trinidad State Junior College",
					"United States Air Force Academy": "United States Air Force Academy",
					"University of Colorado at Boulder": "University of Colorado at Boulder",
					"University of Colorado at Colorado Springs": "University of Colorado at Colora\
do Springs",
					"University of Colorado at Denver": "University of Colorado at Denver",
					"University of Colorado Health Sciences Center": "University of Colorado Health\
 Sciences Center",
					"University of Denver": "University of Denver",
					"University of Northern Colorado": "University of Northern Colorado",
					"Western Colorado Community College": "Western Colorado Community College",
					"Western State College of Colorado": "Western State College of Colorado",
					"Westwood College": "Westwood College",
					"Other": "Other"
				};
				break;
			case "Connecticut":
				newOpts = {
					"": "",
					"Albertus Magnus College": "Albertus Magnus College",
					"Artos Bible College": "Artos Bible College",
					"Asnuntuck Community College": "Asnuntuck Community College",
					"Berkeley Divinity School": "Berkeley Divinity School",
					"Bridgeport Engineering Institute": "Bridgeport Engineering Institute",
					"Capital Community - Technical College": "Capital Community - Technical College\
",
					"Central Connecticut State University": "Central Connecticut State University",
					"Charter Oak College": "Charter Oak College",
					"Connecticut College": "Connecticut College",
					"Eastern Connecticut State University": "Eastern Connecticut State University",
					"Fairfield University": "Fairfield University",
					"Gateway Community College": "Gateway Community College",
					"Gateway Community College, Long Wharf Campus": "Gateway Community College, Lon\
g Wharf Campus",
					"Hartford College for Women": "Hartford College for Women",
					"Hartford Graduate Center": "Hartford Graduate Center",
					"Hartford Seminary": "Hartford Seminary",
					"Holy Apostles College": "Holy Apostles College",
					"Housatonic Community College": "Housatonic Community College",
					"Katherine Gibbs School": "Katherine Gibbs School",
					"Lincoln College of New England": "Lincoln College of New England",
					"Manchester Community College": "Manchester Community College",
					"Mattatuck Community College": "Mattatuck Community College",
					"Middlesex Community College": "Middlesex Community College",
					"Mitchell College": "Mitchell College",
					"Mohegan Community College": "Mohegan Community College",
					"Morse School of Business": "Morse School of Business",
					"Naugatuck Valley Community College": "Naugatuck Valley Community College",
					"New Britain Hosp School of Nsg": "New Britain Hosp School of Nsg",
					"Northwestern Connecticut Community College": "Northwestern Connecticut Communi\
ty College",
					"Norwalk Community College": "Norwalk Community College",
					"Paier College of Art": "Paier College of Art",
					"Post University": "Post University",
					"Quinebaug Valley Community College": "Quinebaug Valley Community College",
					"Quinnipiac University": "Quinnipiac University",
					"Sacred Heart University": "Sacred Heart University",
					"Saint Thomas Seminary": "Saint Thomas Seminary",
					"South Central Community College": "South Central Community College",
					"Southern Connecticut State University": "Southern Connecticut State University\
",
					"St Alphonsus College": "St Alphonsus College",
					"St Basils College": "St Basils College",
					"Swiss Hospitality Institute 'Cesar Ritz'": "Swiss Hospitality Institute 'Cesar\
 Ritz'",
					"Thames Valley State Technical College": "Thames Valley State Technical College\
",
					"Three Rivers Community Technical College": "Three Rivers Community Technical C\
ollege",
					"Trinity College": "Trinity College",
					"Tunxis Community College": "Tunxis Community College",
					"United States Coast Guard Academy": "United States Coast Guard Academy",
					"University of Bridgeport": "University of Bridgeport",
					"University of Connecticut": "University of Connecticut",
					"University of Hartford": "University of Hartford",
					"University of New Haven": "University of New Haven",
					"University of Saint Joseph": "University of Saint Joseph",
					"Waterbury State Technical College": "Waterbury State Technical College",
					"Wesleyan University": "Wesleyan University",
					"Western Connecticut State University": "Western Connecticut State University",
					"Yale University": "Yale University",
					"Other": "Other"
				};
				break;
			case "District of Columbia (DC)":
				newOpts = {
					"": "",
					"American University": "American University",
					"Catholic University of America": "Catholic University of America",
					"Corcoran School of Art": "Corcoran School of Art",
					"Desales Hall School of Theology": "Desales Hall School of Theology",
					"Dominican House of Studies": "Dominican House of Studies",
					"Gallaudet University": "Gallaudet University",
					"George Washington University": "George Washington University",
					"Georgetown University": "Georgetown University",
					"Howard University": "Howard University",
					"International Baccalaureate": "International Baccalaureate",
					"Marine Corps Institute": "Marine Corps Institute",
					"Mount Vernon College": "Mount Vernon College",
					"National Intelligence University": "National Intelligence University",
					"Oblate College": "Oblate College",
					"Southeastern University": "Southeastern University",
					"Strayer University": "Strayer University",
					"Trinity College": "Trinity College",
					"United States Dept of Agriculture Graduate Sch": "United States Dept of Agricu\
lture Graduate Sch",
					"University of The District of Columbia": "University of The District of Columb\
ia",
					"Washington Musc Institute": "Washington Musc Institute",
					"Wesley Theological Seminary": "Wesley Theological Seminary",
					"Other": "Other"
				};
				break;
			case "Delaware":
				newOpts = {
					"": "",
					"Brandywine College of Widener University": "Brandywine College of Widener Univ\
ersity",
					"Delaware State University": "Delaware State University",
					"Delaware Technical & CC, Southern Campus": "Delaware Technical & CC, Southern \
Campus",
					"Delaware Technical & CC, Stanton-Wilmington Campus": "Delaware Technical & CC,\
 Stanton-Wilmington Campus",
					"Delaware Technical & CC, Terry Campus": "Delaware Technical & CC, Terry Campus\
",
					"Goldey Beacom College": "Goldey Beacom College",
					"Kent Christian College": "Kent Christian College",
					"University of Delaware": "University of Delaware",
					"Wesley College": "Wesley College",
					"Wilmington College": "Wilmington College",
					"Other": "Other"
				};
				break;
			case "Florida":
				newOpts = {
					"": "",
					"American Institute for Paralegal Studies": "American Institute for Paralegal S\
tudies",
					"Art Institute of Fort Lauderdale": "Art Institute of Fort Lauderdale",
					"Ave Maria University": "Ave Maria University",
					"Barry University": "Barry University",
					"Bethune-Cookman University": "Bethune-Cookman University",
					"Briarcliffe College": "Briarcliffe College",
					"Broward Community College": "Broward Community College",
					"Chipola Community College": "Chipola Community College",
					"Clearwater Christian College": "Clearwater Christian College",
					"College of Central Florida.": "College of Central Florida.",
					"Daytona State College": "Daytona State College",
					"Eastern Florida State College": "Eastern Florida State College",
					"Eckerd College": "Eckerd College",
					"Edward Waters College": "Edward Waters College",
					"Embry Riddle Aeronautical University": "Embry Riddle Aeronautical University",
					"Everglades University": "Everglades University",
					"Flagler College": "Flagler College",
					"Florida Agricultural and Mechanical University": "Florida Agricultural and Mec\
hanical University",
					"Florida Atlantic University": "Florida Atlantic University",
					"Florida Beacon Bible College": "Florida Beacon Bible College",
					"Florida Bible College": "Florida Bible College",
					"Florida College": "Florida College",
					"Florida Gateway College": "Florida Gateway College",
					"Florida Gulf Coast University": "Florida Gulf Coast University",
					"Florida Hospital College of Health Sciences": "Florida Hospital College of Hea\
lth Sciences",
					"Florida Institute of Technology": "Florida Institute of Technology",
					"Florida International University": "Florida International University",
					"Florida Keys Community College": "Florida Keys Community College",
					"Florida Memorial College": "Florida Memorial College",
					"Florida National College": "Florida National College",
					"Florida Southern College": "Florida Southern College",
					"Florida SouthWestern State College": "Florida SouthWestern State College",
					"Florida State College at Jacksonville": "Florida State College at Jacksonville\
",
					"Florida State University": "Florida State University",
					"Fort Lauderdale College": "Fort Lauderdale College",
					"Gulf Coast State College": "Gulf Coast State College",
					"Hillsborough Community College": "Hillsborough Community College",
					"Hobe Sound Bible College": "Hobe Sound Bible College",
					"Indian River State College": "Indian River State College",
					"International College": "International College",
					"Jacksonville University": "Jacksonville University",
					"Jones College": "Jones College",
					"Keiser University": "Keiser University",
					"Lake-Sumter Community College": "Lake-Sumter Community College",
					"Landmark Baptist College": "Landmark Baptist College",
					"Lincoln International Academy": "Lincoln International Academy",
					"Lynn University": "Lynn University",
					"Miami International University of Art & Design": "Miami International Universi\
ty of Art & Design",
					"Miami-Dade College": "Miami-Dade College",
					"National Education Ctr-Bauder Fashion Coll Campus": "National Education Ctr-Ba\
uder Fashion Coll Campus",
					"New College of University of South Florida": "New College of University of Sou\
th Florida",
					"North Florida Junior College": "North Florida Junior College",
					"Northwest Florida State College": "Northwest Florida State College",
					"Northwood University": "Northwood University",
					"Nova Southeastern University": "Nova Southeastern University",
					"Palm Beach Atlantic College": "Palm Beach Atlantic College",
					"Palm Beach Community College": "Palm Beach Community College",
					"Panama Canal College": "Panama Canal College",
					"Pasco-Hernando Community College - East": "Pasco-Hernando Community College - \
East",
					"Pasco-Hernando Community College - North": "Pasco-Hernando Community College -\
 North",
					"Pasco-Hernando Community College - West": "Pasco-Hernando Community College - \
West",
					"Pensacola Christian College": "Pensacola Christian College",
					"Pensacola State College": "Pensacola State College",
					"Polk Community College": "Polk Community College",
					"Ringling School of Art and Design": "Ringling School of Art and Design",
					"Rollins College": "Rollins College",
					"Santa Fe College": "Santa Fe College",
					"Santa Rosa Christian College": "Santa Rosa Christian College",
					"Schiller Intl Univ": "Schiller Intl Univ",
					"Seminole Community College": "Seminole Community College",
					"South Florida Community College": "South Florida Community College",
					"Southeastern Academy": "Southeastern Academy",
					"Southeastern University": "Southeastern University",
					"Southern College": "Southern College",
					"Spurgeon Baptist Bible College": "Spurgeon Baptist Bible College",
					"St John Vianney College Seminary": "St John Vianney College Seminary",
					"St John's River Community College": "St John's River Community College",
					"St Leo University": "St Leo University",
					"St Petersburg Junior College": "St Petersburg Junior College",
					"St Thomas University": "St Thomas University",
					"State College of Florida": "State College of Florida",
					"Stetson University": "Stetson University",
					"Tallahassee Community College": "Tallahassee Community College",
					"Tampa College": "Tampa College",
					"Union Institute": "Union Institute",
					"United Electronics Institute": "United Electronics Institute",
					"University of Central Florida": "University of Central Florida",
					"University of Florida": "University of Florida",
					"University of Miami": "University of Miami",
					"University of North Florida": "University of North Florida",
					"University of Sarasota": "University of Sarasota",
					"University of South Florida": "University of South Florida",
					"University of Tampa": "University of Tampa",
					"University of West Florida": "University of West Florida",
					"Valencia Community College": "Valencia Community College",
					"Walden University": "Walden University",
					"Warner Southern College": "Warner Southern College",
					"Webber College": "Webber College",
					"Webster College": "Webster College",
					"Other": "Other"
				};
				break;
			case "Georgia":
				newOpts = {
					"": "",
					"Abraham Baldwin Agricultural College": "Abraham Baldwin Agricultural College",
					"Agnes Scott College": "Agnes Scott College",
					"Albany State College": "Albany State College",
					"Altamaha Technical College": "Altamaha Technical College",
					"American Intercontinental University": "American Intercontinental University",
					"Andrew College": "Andrew College",
					"Armstrong Atlantic State University": "Armstrong Atlantic State University",
					"Art Institute of Atlanta": "Art Institute of Atlanta",
					"Athens Technical College": "Athens Technical College",
					"Atlanta Area Tech School": "Atlanta Area Tech School",
					"Atlanta College of Art": "Atlanta College of Art",
					"Atlanta Metropolitan College": "Atlanta Metropolitan College",
					"Augusta College": "Augusta College",
					"Augusta Technical Institute": "Augusta Technical Institute",
					"Bainbridge Junior College": "Bainbridge Junior College",
					"Baptist University America": "Baptist University America",
					"Bauder Fashion College of Atlanta": "Bauder Fashion College of Atlanta",
					"Berry College": "Berry College",
					"Beulah Heights Bible College": "Beulah Heights Bible College",
					"Brenau University": "Brenau University",
					"Brewton-Parker College": "Brewton-Parker College",
					"Brunswick College": "Brunswick College",
					"Central Georgia Technical College": "Central Georgia Technical College",
					"Chapel Hill College": "Chapel Hill College",
					"Chattahoochee Technical Institute": "Chattahoochee Technical Institute",
					"Clark Atlanta University": "Clark Atlanta University",
					"Clayton College and State University": "Clayton College and State University",
					"Clayton State College": "Clayton State College",
					"College of Coastal Georgia": "College of Coastal Georgia",
					"Columbus State University": "Columbus State University",
					"Columbus Technical Institute": "Columbus Technical Institute",
					"Covenant College": "Covenant College",
					"Dalton State College": "Dalton State College",
					"Darton College": "Darton College",
					"De Kalb College - Central": "De Kalb College - Central",
					"De Kalb College - North": "De Kalb College - North",
					"De Kalb College - South": "De Kalb College - South",
					"Dekalb College": "Dekalb College",
					"Devry Institute of Technology GA": "Devry Institute of Technology GA",
					"Devry University": "Devry University",
					"Devry University": "Devry University",
					"Draughons Junior College": "Draughons Junior College",
					"Earl Paulk Kngdm Institute": "Earl Paulk Kngdm Institute",
					"East Georgia College": "East Georgia College",
					"Emmanuel College": "Emmanuel College",
					"Emory University": "Emory University",
					"Emory University Allied Health P": "Emory University Allied Health P",
					"Fort Valley State College": "Fort Valley State College",
					"Gainesville College": "Gainesville College",
					"Georgia College and State University": "Georgia College and State University",
					"Georgia Health Sciences University": "Georgia Health Sciences University",
					"Georgia Highlands College": "Georgia Highlands College",
					"Georgia Institute of Technology": "Georgia Institute of Technology",
					"Georgia Military College": "Georgia Military College",
					"Georgia Northwester Tech College": "Georgia Northwester Tech College",
					"Georgia Perimeter College": "Georgia Perimeter College",
					"Georgia Regents University": "Georgia Regents University",
					"Georgia Southern University": "Georgia Southern University",
					"Georgia Southwestern State University": "Georgia Southwestern State University\
",
					"Georgia State University": "Georgia State University",
					"Gordon State College": "Gordon State College",
					"Gwinnett Area Tech S": "Gwinnett Area Tech S",
					"Institute of Paper Science and Technology": "Institute of Paper Science and Te\
chnology",
					"John Marshall University Law": "John Marshall University Law",
					"Kennesaw State University": "Kennesaw State University",
					"Kennesaw State University": "Kennesaw State University",
					"Lagrange College": "Lagrange College",
					"Lanier Technical College": "Lanier Technical College",
					"Life University": "Life University",
					"Mercer University": "Mercer University",
					"Mercer University Atlanta": "Mercer University Atlanta",
					"Mercer University Sthn S Phar": "Mercer University Sthn S Phar",
					"Middle Georgia College": "Middle Georgia College",
					"Middle Georgia State University": "Middle Georgia State University",
					"Middle Georgia Technical College": "Middle Georgia Technical College",
					"Morehouse College": "Morehouse College",
					"Morris Brown College": "Morris Brown College",
					"North Georgia Technical Institute": "North Georgia Technical Institute",
					"Oglethorpe University": "Oglethorpe University",
					"Oxford College of Emory University": "Oxford College of Emory University",
					"Paine College": "Paine College",
					"Piedmont College": "Piedmont College",
					"Point University": "Point University",
					"Reinhardt College": "Reinhardt College",
					"Savannah College of Art and Design": "Savannah College of Art and Design",
					"Savannah State University": "Savannah State University",
					"Savannah Tech": "Savannah Tech",
					"Shorter University": "Shorter University",
					"South Georgia College": "South Georgia College",
					"South Georgia Technical College": "South Georgia Technical College",
					"South University": "South University",
					"Southern Crescent Technical College": "Southern Crescent Technical College",
					"Spelman College": "Spelman College",
					"Swainsboro Area Vocational-Technical School": "Swainsboro Area Vocational-Tech\
nical School",
					"Thomas College": "Thomas College",
					"Toccoa Falls College": "Toccoa Falls College",
					"Truett McConnell College": "Truett McConnell College",
					"University of Georgia": "University of Georgia",
					"University of Georgia Education Center": "University of Georgia Education Cent\
er",
					"University of North Georgia": "University of North Georgia",
					"University of West Georgia": "University of West Georgia",
					"Valdosta State University": "Valdosta State University",
					"Waycross College": "Waycross College",
					"Wesleyan College": "Wesleyan College",
					"Young Harris College": "Young Harris College",
					"Other": "Other"
				};
				break;
			case "Guam":
				newOpts = {
					"": "",
					"Guam Community College": "Guam Community College",
					"University of Guam": "University of Guam",
					"Other": "Other"
				};
				break;
			case "Hawaii":
				newOpts = {
					"": "",
					"Argosy University": "Argosy University",
					"Brigham Young University, Hawaii Campus": "Brigham Young University, Hawaii Ca\
mpus",
					"Chaminade University of Honolulu": "Chaminade University of Honolulu",
					"Hawaii Loa College": "Hawaii Loa College",
					"Hawaii Pacific University": "Hawaii Pacific University",
					"Heald College": "Heald College",
					"Honolulu Community College": "Honolulu Community College",
					"International College & Graduate Schs of Theology": "International College & G\
raduate Schs of Theology",
					"Kapiolani Community College": "Kapiolani Community College",
					"Kauai Community College": "Kauai Community College",
					"Leeward Community College": "Leeward Community College",
					"Pacific and Asia Christian University": "Pacific and Asia Christian University\
",
					"Tokai International College": "Tokai International College",
					"Transpacific Hawaii College": "Transpacific Hawaii College",
					"University of Hawaii - Maui College": "University of Hawaii - Maui College",
					"University of Hawaii at Hilo": "University of Hawaii at Hilo",
					"University of Hawaii at Manoa": "University of Hawaii at Manoa",
					"University of Hawaii at West Oahu": "University of Hawaii at West Oahu",
					"University of Hawaii, Hawaii Community College": "University of Hawaii, Hawaii\
 Community College",
					"Windward Community College": "Windward Community College",
					"Other": "Other"
				};
				break;
			case "Iowa":
				newOpts = {
					"": "",
					"American Institute of Business": "American Institute of Business",
					"American Institute of Commerce": "American Institute of Commerce",
					"Ashford University": "Ashford University",
					"Briar Cliff University": "Briar Cliff University",
					"Buena Vista University": "Buena Vista University",
					"Central College": "Central College",
					"Clarke University": "Clarke University",
					"Clinton Community College": "Clinton Community College",
					"Coe College": "Coe College",
					"Cornell College": "Cornell College",
					"Des Moines Area Community College": "Des Moines Area Community College",
					"Des Moines Area Community College": "Des Moines Area Community College",
					"Divine Word College": "Divine Word College",
					"Dordt College": "Dordt College",
					"Drake University": "Drake University",
					"Eastern Iowa Community College District": "Eastern Iowa Community College Dist\
rict",
					"Ellsworth Community College Iowa Valley": "Ellsworth Community College Iowa Va\
lley",
					"Emmaus Bible College": "Emmaus Bible College",
					"Faith Baptist Bible College": "Faith Baptist Bible College",
					"Graceland University": "Graceland University",
					"Grand View University": "Grand View University",
					"Grinnell College": "Grinnell College",
					"Hamilton College Des Moines": "Hamilton College Des Moines",
					"Hawkeye Community College": "Hawkeye Community College",
					"Indian Hills CC - Centerville Campus": "Indian Hills CC - Centerville Campus",
					"Indian Hills Community College - Ottumwa Campus": "Indian Hills Community Coll\
ege - Ottumwa Campus",
					"Iowa Central CC - Webster City Center": "Iowa Central CC - Webster City Center\
",
					"Iowa Central Community College": "Iowa Central Community College",
					"Iowa Central Community College - Fort Dodge Center": "Iowa Central Community C\
ollege - Fort Dodge Center",
					"Iowa Lakes CC - North Attendance Center": "Iowa Lakes CC - North Attendance Ce\
nter",
					"Iowa Lakes CC - South Attendance Center": "Iowa Lakes CC - South Attendance Ce\
nter",
					"Iowa State University of Science and Technology": "Iowa State University of Sc\
ience and Technology",
					"Iowa Wesleyan University": "Iowa Wesleyan University",
					"Iowa Western CC - Council Bluffs Center": "Iowa Western CC - Council Bluffs Ce\
nter",
					"Iowa Western Community College - Clarinda Center": "Iowa Western Community Col\
lege - Clarinda Center",
					"Kaplan University": "Kaplan University",
					"Kirkwood Community College": "Kirkwood Community College",
					"Loras College": "Loras College",
					"Luther College": "Luther College",
					"Maharishi University of Management": "Maharishi University of Management",
					"Marshalltown Community College - Iowa Valley": "Marshalltown Community College\
 - Iowa Valley",
					"Marycrest College": "Marycrest College",
					"Mercy College of Health Sciences": "Mercy College of Health Sciences",
					"Morningside College": "Morningside College",
					"MT Mercy University": "MT Mercy University",
					"Muscatine Community College": "Muscatine Community College",
					"North Iowa Area Community College": "North Iowa Area Community College",
					"Northeast Iowa Community College, Calmar-Peosta": "Northeast Iowa Community Co\
llege, Calmar-Peosta",
					"Northeast Iowa Technical Institute - North Center": "Northeast Iowa Technical \
Institute - North Center",
					"Northwest Iowa Community College": "Northwest Iowa Community College",
					"Northwest Iowa Technical College": "Northwest Iowa Technical College",
					"Northwestern College": "Northwestern College",
					"Palmer College of Chiropractic": "Palmer College of Chiropractic",
					"Parsons College": "Parsons College",
					"Scott Community College": "Scott Community College",
					"Simpson College": "Simpson College",
					"Sioux Empire College": "Sioux Empire College",
					"Southeastern Community College - North Campus": "Southeastern Community Colleg\
e - North Campus",
					"Southeastern Community College - South Campus": "Southeastern Community Colleg\
e - South Campus",
					"Southeastern Community College South": "Southeastern Community College South",
					"Southwestern Community College - Creston": "Southwestern Community College - C\
reston",
					"St Ambrose University": "St Ambrose University",
					"Univ of Osteopathic Medicine & Health Sciences": "Univ of Osteopathic Medicine\
 & Health Sciences",
					"University of Dubuque": "University of Dubuque",
					"University of Iowa": "University of Iowa",
					"University of Northern Iowa": "University of Northern Iowa",
					"Upper Iowa Universty": "Upper Iowa Universty",
					"Vennard College": "Vennard College",
					"Waldorf College": "Waldorf College",
					"Wartburg College": "Wartburg College",
					"Western Iowa Tech Community College": "Western Iowa Tech Community College",
					"Westmar University": "Westmar University",
					"William Penn University": "William Penn University",
					"Other": "Other"
				};
				break;
			case "Idaho":
				newOpts = {
					"": "",
					"Boise State University": "Boise State University",
					"Brigham Young University, Idaho": "Brigham Young University, Idaho",
					"College of Idaho": "College of Idaho",
					"College of Southern Idaho": "College of Southern Idaho",
					"College of St Gertrude": "College of St Gertrude",
					"College of Western Idaho": "College of Western Idaho",
					"Eastern Idaho Technical College": "Eastern Idaho Technical College",
					"Idaho State University": "Idaho State University",
					"Lewis-Clark State College": "Lewis-Clark State College",
					"Links School of Business": "Links School of Business",
					"North Idaho College": "North Idaho College",
					"Northwest Nazarene University": "Northwest Nazarene University",
					"University of Idaho": "University of Idaho",
					"University of Idaho  GENERIC": "University of Idaho  GENERIC",
					"Valley Business College": "Valley Business College",
					"Other": "Other"
				};
				break;
			case "Illinois":
				newOpts = {
					"": "",
					"American Academy of Art": "American Academy of Art",
					"American Conservatory of Music": "American Conservatory of Music",
					"American Intercontinental University": "American Intercontinental University",
					"American Islamic College": "American Islamic College",
					"Augustana College Illinois": "Augustana College Illinois",
					"Aurora University": "Aurora University",
					"Barat College": "Barat College",
					"Benedictine University": "Benedictine University",
					"Black Hawk College - East Campus": "Black Hawk College - East Campus",
					"Black Hawk College - Quad Cities Campus": "Black Hawk College - Quad Cities Ca\
mpus",
					"Blackburn College": "Blackburn College",
					"Bloomington-Normal": "Bloomington-Normal",
					"Bradley University": "Bradley University",
					"Carl Sandburg College": "Carl Sandburg College",
					"Central YMCA Community College": "Central YMCA Community College",
					"Chicago College of Commerce": "Chicago College of Commerce",
					"Chicago School of Professional Psychology": "Chicago School of Professional Ps\
ychology",
					"Chicago State University": "Chicago State University",
					"Chicago Theological Seminary": "Chicago Theological Seminary",
					"City Colleges of Chicago": "City Colleges of Chicago",
					"City Colls of Chicago, Chicago City Wide Coll": "City Colls of Chicago, Chicag\
o City Wide Coll",
					"College of Dupage": "College of Dupage",
					"College of Lake County": "College of Lake County",
					"College of St Francis": "College of St Francis",
					"Columbia College": "Columbia College",
					"Concordia College": "Concordia College",
					"Danville Area Community College": "Danville Area Community College",
					"Depaul University": "Depaul University",
					"Devry Institute of Technology": "Devry Institute of Technology",
					"Devry Institute of Technology": "Devry Institute of Technology",
					"Devry Institute of Technology AZ": "Devry Institute of Technology AZ",
					"Devry Institute of Technology Can": "Devry Institute of Technology Can",
					"Devry Institute of Technology MO": "Devry Institute of Technology MO",
					"Devry University": "Devry University",
					"Devry University": "Devry University",
					"Devry University": "Devry University",
					"Dominican University": "Dominican University",
					"Eastern Illinois University": "Eastern Illinois University",
					"Elgin Community College": "Elgin Community College",
					"Ellis University": "Ellis University",
					"Elmhurst College": "Elmhurst College",
					"Eureka College": "Eureka College",
					"Frontier Community College": "Frontier Community College",
					"Governors State University": "Governors State University",
					"Greenville College": "Greenville College",
					"Harold Washington College Chicago": "Harold Washington College Chicago",
					"Harper College": "Harper College",
					"Harper College": "Harper College",
					"Harry S Truman College": "Harry S Truman College",
					"Heartland Community College": "Heartland Community College",
					"Highland Community College": "Highland Community College",
					"Illinois Central College": "Illinois Central College",
					"Illinois College": "Illinois College",
					"Illinois College of Optometry": "Illinois College of Optometry",
					"Illinois Institute of Art-Chicago": "Illinois Institute of Art-Chicago",
					"Illinois Institute of Technology": "Illinois Institute of Technology",
					"Illinois State University": "Illinois State University",
					"Illinois Valley Community College": "Illinois Valley Community College",
					"Illinois Wesleyan University": "Illinois Wesleyan University",
					"John A Logan College": "John A Logan College",
					"John Wood Community College": "John Wood Community College",
					"Joliet Junior College": "Joliet Junior College",
					"Judson Univeristy": "Judson Univeristy",
					"Kankakee Community College": "Kankakee Community College",
					"Kaplan University": "Kaplan University",
					"Kaskaskia College": "Kaskaskia College",
					"Kendall College": "Kendall College",
					"Kennedy-King College": "Kennedy-King College",
					"Kishwaukee College": "Kishwaukee College",
					"Knox College": "Knox College",
					"Lake Forest College": "Lake Forest College",
					"Lake Land College": "Lake Land College",
					"Lewis and Clark Community College": "Lewis and Clark Community College",
					"Lewis University": "Lewis University",
					"Lexington Institute Hosp Crs": "Lexington Institute Hosp Crs",
					"Lincoln Christian University": "Lincoln Christian University",
					"Lincoln College": "Lincoln College",
					"Lincoln Land Community College": "Lincoln Land Community College",
					"Loyola University of Chicago": "Loyola University of Chicago",
					"Maccormac Junior College": "Maccormac Junior College",
					"Macmurray College": "Macmurray College",
					"Malcolm X College - City Colleges of Chicago": "Malcolm X College - City Colle\
ges of Chicago",
					"Mallinckrodt College of The North Shore": "Mallinckrodt College of The North S\
hore",
					"Maryknoll College": "Maryknoll College",
					"McCormick Theological Seminary": "McCormick Theological Seminary",
					"McHenry County College": "McHenry County College",
					"McKendree College": "McKendree College",
					"Midstate College": "Midstate College",
					"Midwest College of Engineering": "Midwest College of Engineering",
					"Millikin University": "Millikin University",
					"Monmouth College": "Monmouth College",
					"Montay College": "Montay College",
					"Moody Bible Institute": "Moody Bible Institute",
					"Moraine Valley Community College": "Moraine Valley Community College",
					"Morrison Institute of Technology": "Morrison Institute of Technology",
					"Morton College": "Morton College",
					"Mundelein College": "Mundelein College",
					"National College of Chiropratic": "National College of Chiropratic",
					"National College of Education, Chicago": "National College of Education, Chica\
go",
					"National-Louis University": "National-Louis University",
					"Niles College Loyola University": "Niles College Loyola University",
					"North Central College": "North Central College",
					"North Park University": "North Park University",
					"Northeastern Illinois University": "Northeastern Illinois University",
					"Northern Illinois University": "Northern Illinois University",
					"Northwestern University": "Northwestern University",
					"Oakton Community College": "Oakton Community College",
					"Olive-Harvey College": "Olive-Harvey College",
					"Olivet Nazarene University": "Olivet Nazarene University",
					"Olney Central College": "Olney Central College",
					"Our Lady Ang Fran SM": "Our Lady Ang Fran SM",
					"Parkland College": "Parkland College",
					"Parks College of St Louis University": "Parks College of St Louis University",
					"Prairie State College": "Prairie State College",
					"Principia College": "Principia College",
					"Quincy Univeristy": "Quincy Univeristy",
					"Rend Lake College": "Rend Lake College",
					"Richard J Daley College": "Richard J Daley College",
					"Richland Community College": "Richland Community College",
					"Robert Morris University": "Robert Morris University",
					"Rock Valley College": "Rock Valley College",
					"Rockford College": "Rockford College",
					"Roosevelt University": "Roosevelt University",
					"Rosary College": "Rosary College",
					"Rush University": "Rush University",
					"Sauk Valley Community College": "Sauk Valley Community College",
					"School of The Art Institute of Chicago": "School of The Art Institute of Chica\
go",
					"Shawnee Community College": "Shawnee Community College",
					"Sherwood Conservatory of Music": "Sherwood Conservatory of Music",
					"Shimer College": "Shimer College",
					"South Suburban College": "South Suburban College",
					"Southeastern Illinois College": "Southeastern Illinois College",
					"Southern Illinois University - Carbondale": "Southern Illinois University - Ca\
rbondale",
					"Southern Illinois University - Edwardsville": "Southern Illinois University - \
Edwardsville",
					"Southwestern Illinois College": "Southwestern Illinois College",
					"Spertus College of Judaica": "Spertus College of Judaica",
					"Spoon River College": "Spoon River College",
					"Springfield College in Illinois": "Springfield College in Illinois",
					"St Augustine College": "St Augustine College",
					"St Xavier University": "St Xavier University",
					"State Community College": "State Community College",
					"Trinity Christian College": "Trinity Christian College",
					"Trinity Evangelical Divinity School": "Trinity Evangelical Divinity School",
					"Trinity International University": "Trinity International University",
					"Triton College": "Triton College",
					"Truman College": "Truman College",
					"Univ of Health Sciences / The Chicago Medical Sch": "Univ of Health Sciences /\
 The Chicago Medical Sch",
					"University of Chicago": "University of Chicago",
					"University of Illinois at Chicago": "University of Illinois at Chicago",
					"University of Illinois at Springfield": "University of Illinois at Springfield\
",
					"University of Illinois at Urbana-Champaign": "University of Illinois at Urbana\
-Champaign",
					"University of St Francis": "University of St Francis",
					"Vandercook College of Music": "Vandercook College of Music",
					"Wabash Valley College": "Wabash Valley College",
					"Waubonsee Community College": "Waubonsee Community College",
					"West Suburban College of Nursing": "West Suburban College of Nursing",
					"Western Illinois University": "Western Illinois University",
					"Wheaton College": "Wheaton College",
					"Wilbur Wright College": "Wilbur Wright College",
					"William Rainey Harper College": "William Rainey Harper College",
					"Other": "Other"
				};
				break;
			case "Indiana":
				newOpts = {
					"": "",
					"American College of Education": "American College of Education",
					"Ancilla College": "Ancilla College",
					"Anderson University": "Anderson University",
					"Ball State University": "Ball State University",
					"Bethel College": "Bethel College",
					"Butler University": "Butler University",
					"Calumet College of St Joseph": "Calumet College of St Joseph",
					"Concordia Theological Seminary": "Concordia Theological Seminary",
					"Depauw University": "Depauw University",
					"Earlham College": "Earlham College",
					"Franklin College": "Franklin College",
					"Goshen Biblical Seminary": "Goshen Biblical Seminary",
					"Goshen College": "Goshen College",
					"Grace College": "Grace College",
					"Hanover College": "Hanover College",
					"Herron School of Art": "Herron School of Art",
					"Holy Cross College": "Holy Cross College",
					"Huntington College": "Huntington College",
					"Indiana Institute of Technology": "Indiana Institute of Technology",
					"Indiana State University": "Indiana State University",
					"Indiana Tech Community College": "Indiana Tech Community College",
					"Indiana University": "Indiana University",
					"Indiana University-East": "Indiana University-East",
					"Indiana University-Kokomo": "Indiana University-Kokomo",
					"Indiana University-Northwest": "Indiana University-Northwest",
					"Indiana University-Purdue University at Fort Wayne": "Indiana University-Purdu\
e University at Fort Wayne",
					"Indiana University-South Bend": "Indiana University-South Bend",
					"Indiana University-Southeast": "Indiana University-Southeast",
					"Indiana Univ-Purdue Univ at Indianapolis": "Indiana Univ-Purdue Univ at Indian\
apolis",
					"Indiana Vocational Technical College, Columbus": "Indiana Vocational Technical\
 College, Columbus",
					"Indiana Vocational Technical College, Evansville": "Indiana Vocational Technic\
al College, Evansville",
					"Indiana Vocational Technical College, Fort Wayne": "Indiana Vocational Technic\
al College, Fort Wayne",
					"Indiana Vocational Technical College, Gary": "Indiana Vocational Technical Col\
lege, Gary",
					"Indiana Vocational Technical College, Indianapolis": "Indiana Vocational Techn\
ical College, Indianapolis",
					"Indiana Vocational Technical College, Richmond": "Indiana Vocational Technical\
 College, Richmond",
					"Indiana Vocational Technical College, South Bend": "Indiana Vocational Technic\
al College, South Bend",
					"Indiana Vocational Technical College, Terre Haute": "Indiana Vocational Techni\
cal College, Terre Haute",
					"Indiana Vocational Technical College-South Central": "Indiana Vocational Techn\
ical College-South Central",
					"Indiana Vocational Technical College-Southeast": "Indiana Vocational Technical\
 College-Southeast",
					"Indiana Wesleyan University": "Indiana Wesleyan University",
					"International Business College": "International Business College",
					"Interstate Technical Institute": "Interstate Technical Institute",
					"IPFW": "IPFW",
					"ITT Business Institute": "ITT Business Institute",
					"ITT Technical and Business Institute": "ITT Technical and Business Institute",
					"ITT Technical Institute": "ITT Technical Institute",
					"Ivy Tech Community College": "Ivy Tech Community College",
					"Ivy Tech Community College of Indiana": "Ivy Tech Community College of Indiana\
",
					"Ivy Tech State College": "Ivy Tech State College",
					"Ivy Tech State College": "Ivy Tech State College",
					"Manchester College": "Manchester College",
					"Marian College": "Marian College",
					"Michiana College": "Michiana College",
					"Oakland City College": "Oakland City College",
					"Oakland City College Bedford": "Oakland City College Bedford",
					"Purdue University": "Purdue University",
					"Purdue University Hammond": "Purdue University Hammond",
					"Purdue University Westvlle": "Purdue University Westvlle",
					"Rose-Hulman Institute of Technology": "Rose-Hulman Institute of Technology",
					"St Francis College": "St Francis College",
					"St Josephs College": "St Josephs College",
					"St Mary-of-The-Woods College": "St Mary-of-The-Woods College",
					"St Marys College Indiana": "St Marys College Indiana",
					"St Meinrad College": "St Meinrad College",
					"Summit Christian College": "Summit Christian College",
					"Taylor University": "Taylor University",
					"Tri-State University": "Tri-State University",
					"University of Evansville": "University of Evansville",
					"University of Indianapolis": "University of Indianapolis",
					"University of Notre Dame": "University of Notre Dame",
					"University of Southern Indiana": "University of Southern Indiana",
					"Valparaiso Tech Institute": "Valparaiso Tech Institute",
					"Valparaiso University": "Valparaiso University",
					"Vincennes University": "Vincennes University",
					"Vincennes University": "Vincennes University",
					"Wabash College": "Wabash College",
					"Other": "Other"
				};
				break;
			case "Kansas":
				newOpts = {
					"": "",
					"Allen County Community College": "Allen County Community College",
					"Baker University": "Baker University",
					"Barton County Community College": "Barton County Community College",
					"Benedictine College": "Benedictine College",
					"Bethany College": "Bethany College",
					"Bethel College Kansas": "Bethel College Kansas",
					"Brown Mackie College": "Brown Mackie College",
					"Butler Community College": "Butler Community College",
					"Central Christian College": "Central Christian College",
					"Cloud County Community College": "Cloud County Community College",
					"Coffeyville Community College": "Coffeyville Community College",
					"Colby Community College": "Colby Community College",
					"Cowley County CC & Vocational-Technical School": "Cowley County CC & Vocationa\
l-Technical School",
					"Dodge City Community College": "Dodge City Community College",
					"Donnelly College": "Donnelly College",
					"Emporia State University": "Emporia State University",
					"Fort Hays State University": "Fort Hays State University",
					"Fort Scott Community College": "Fort Scott Community College",
					"Friends Bible College": "Friends Bible College",
					"Friends University": "Friends University",
					"Garden City Community College": "Garden City Community College",
					"Haskell Indian Nations University": "Haskell Indian Nations University",
					"Hesston College": "Hesston College",
					"Highland Community College": "Highland Community College",
					"Hutchinson Community College": "Hutchinson Community College",
					"Independence Community College": "Independence Community College",
					"Johnson County Community College": "Johnson County Community College",
					"Kansas City Kansas Community College": "Kansas City Kansas Community College",
					"Kansas College of Technology": "Kansas College of Technology",
					"Kansas Newman College": "Kansas Newman College",
					"Kansas State Univ at Salina College of Technology": "Kansas State Univ at Sali\
na College of Technology",
					"Kansas State University": "Kansas State University",
					"Kansas Wesleyan University": "Kansas Wesleyan University",
					"Labette Community College": "Labette Community College",
					"Manhattan Area Techical College": "Manhattan Area Techical College",
					"Manhattan Christian College": "Manhattan Christian College",
					"Marymount College of Kansas": "Marymount College of Kansas",
					"McPherson College": "McPherson College",
					"Mid-America Nazarene College": "Mid-America Nazarene College",
					"Neosho County Community College": "Neosho County Community College",
					"Ottawa University": "Ottawa University",
					"Pittsburg State University": "Pittsburg State University",
					"Pratt Community College": "Pratt Community College",
					"Saint Mary of The Plains College": "Saint Mary of The Plains College",
					"Seward County Community College": "Seward County Community College",
					"Southwestern College": "Southwestern College",
					"St Johns College": "St Johns College",
					"St Marys College St Mary": "St Marys College St Mary",
					"Sterling College Kansas": "Sterling College Kansas",
					"Tabor College": "Tabor College",
					"University of Kansas": "University of Kansas",
					"University of Saint Mary": "University of Saint Mary",
					"US Army Command and General Staff College": "US Army Command and General Staff\
 College",
					"Washburn Institute of Technology": "Washburn Institute of Technology",
					"Way College Emporia": "Way College Emporia",
					"Wichita State University": "Wichita State University",
					"Other": "Other"
				};
				break;
			case "Kentucky":
				newOpts = {
					"": "",
					"Alice Lloyd College": "Alice Lloyd College",
					"Asbury College": "Asbury College",
					"Ashland Community College": "Ashland Community College",
					"Bellarmine College": "Bellarmine College",
					"Berea College": "Berea College",
					"Big Sandy Community & Technical College": "Big Sandy Community & Technical Col\
lege",
					"Bluegrass Community & Technical College": "Bluegrass Community & Technical Col\
lege",
					"Brescia University": "Brescia University",
					"Campbellsville College": "Campbellsville College",
					"Centre College": "Centre College",
					"Cumberland College": "Cumberland College",
					"Eastern Kentucky University": "Eastern Kentucky University",
					"Elizabethtown Community College": "Elizabethtown Community College",
					"Georgetown College": "Georgetown College",
					"Henderson Community College": "Henderson Community College",
					"Hopkinsville Community College": "Hopkinsville Community College",
					"Jefferson Community College": "Jefferson Community College",
					"Kentucky Christian College": "Kentucky Christian College",
					"Kentucky Mountain Bible Institute": "Kentucky Mountain Bible Institute",
					"Kentucky State University": "Kentucky State University",
					"Kentucky Wesleyan College": "Kentucky Wesleyan College",
					"Lees College": "Lees College",
					"Lexington Community College": "Lexington Community College",
					"Lindsey Wilson College": "Lindsey Wilson College",
					"Madisonville Community College": "Madisonville Community College",
					"Maysville Community College": "Maysville Community College",
					"Midway College": "Midway College",
					"Morehead State University": "Morehead State University",
					"Murray State University": "Murray State University",
					"Northern Kentucky University": "Northern Kentucky University",
					"Owensboro Community & Technical College": "Owensboro Community & Technical Col\
lege",
					"Pikeville College": "Pikeville College",
					"Somerset Community College": "Somerset Community College",
					"Southeast Community College": "Southeast Community College",
					"Southern Baptist Theological Seminary": "Southern Baptist Theological Seminary\
",
					"Spalding University": "Spalding University",
					"St Catharine College": "St Catharine College",
					"Sue Bennett College": "Sue Bennett College",
					"Sullivan University": "Sullivan University",
					"Sullivan University-Lexington": "Sullivan University-Lexington",
					"Thomas More College": "Thomas More College",
					"Transylvania University": "Transylvania University",
					"Union College": "Union College",
					"University of Kentucky Fort Knox Center College": "University of Kentucky Fort\
 Knox Center College",
					"University of Kentucky/Ashland Community College": "University of Kentucky/Ash\
land Community College",
					"University of Kentucky-Vet Diag Lab": "University of Kentucky-Vet Diag Lab",
					"University of Louisville": "University of Louisville",
					"Watterson College": "Watterson College",
					"West Kentucky Community & Technical College": "West Kentucky Community & Techn\
ical College",
					"Western Kentucky University": "Western Kentucky University",
					"Other": "Other"
				};
				break;
			case "Louisiana":
				newOpts = {
					"": "",
					"Baton Rouge Community College": "Baton Rouge Community College",
					"Bossier Parish Community College": "Bossier Parish Community College",
					"Centenary College": "Centenary College",
					"Delgado Community College": "Delgado Community College",
					"Dillard University": "Dillard University",
					"Faith Bible College": "Faith Bible College",
					"Grambling State University": "Grambling State University",
					"Jimmy Swaggart Bible College and Seminary": "Jimmy Swaggart Bible College and \
Seminary",
					"La Salle University": "La Salle University",
					"Louisiana College": "Louisiana College",
					"Louisiana State Univ & Agric. & Mechanical Coll": "Louisiana State Univ & Agri\
c. & Mechanical Coll",
					"Louisiana State University at Alexandria": "Louisiana State University at Alex\
andria",
					"Louisiana State University at Eunice": "Louisiana State University at Eunice",
					"Louisiana State University at Shreveport": "Louisiana State University at Shre\
veport",
					"Louisiana State University Medical Center": "Louisiana State University Medica\
l Center",
					"Louisiana Tech University": "Louisiana Tech University",
					"Loyola University": "Loyola University",
					"McNeese State University": "McNeese State University",
					"New Orleans Baptist Theological Seminary": "New Orleans Baptist Theological Se\
minary",
					"Nicholls State University": "Nicholls State University",
					"Northwestern State University of Louisiana": "Northwestern State University of\
 Louisiana",
					"Notre Dame Seminary": "Notre Dame Seminary",
					"Our Lady of Holy Cross College": "Our Lady of Holy Cross College",
					"Southeastern Louisiana University": "Southeastern Louisiana University",
					"Southern Univ & Agricultural & Mechanical College": "Southern Univ & Agricultu\
ral & Mechanical College",
					"Southern University": "Southern University",
					"Sowela Technical Community College": "Sowela Technical Community College",
					"St Joseph Seminary College": "St Joseph Seminary College",
					"St Marys Dominican College": "St Marys Dominican College",
					"The University of Louisiana at Monroe": "The University of Louisiana at Monroe\
",
					"Tulane University": "Tulane University",
					"University of Louisiana at Lafayette": "University of Louisiana at Lafayette",
					"University of Louisiana at Monroe": "University of Louisiana at Monroe",
					"University of New Orleans": "University of New Orleans",
					"Xavier University": "Xavier University",
					"Other": "Other"
				};
				break;
			case "Massachusetts":
				newOpts = {
					"": "",
					"American International College": "American International College",
					"Amherst College": "Amherst College",
					"Anna Maria College M & W": "Anna Maria College M & W",
					"Aquinas Junior College, Milton": "Aquinas Junior College, Milton",
					"Aquinas Junior College, Newton": "Aquinas Junior College, Newton",
					"Art Institute of Boston": "Art Institute of Boston",
					"Assumption College": "Assumption College",
					"Atlantic Union College": "Atlantic Union College",
					"Babson College": "Babson College",
					"Bay Path Junior College": "Bay Path Junior College",
					"Bay State Junior College": "Bay State Junior College",
					"Becker College, Leicester": "Becker College, Leicester",
					"Becker College, Worcester": "Becker College, Worcester",
					"Bentley College": "Bentley College",
					"Berklee College of Music": "Berklee College of Music",
					"Berkshire Christian College": "Berkshire Christian College",
					"Berkshire Community College": "Berkshire Community College",
					"Boston Architectural Center": "Boston Architectural Center",
					"Boston College": "Boston College",
					"Boston University": "Boston University",
					"Bradford College": "Bradford College",
					"Brandeis University": "Brandeis University",
					"Bridgewater State University": "Bridgewater State University",
					"Bristol Community College": "Bristol Community College",
					"Bunker Hill Community College": "Bunker Hill Community College",
					"Burdett School": "Burdett School",
					"Cambridge College": "Cambridge College",
					"Cape Cod Community College": "Cape Cod Community College",
					"Cardinal Cushing College": "Cardinal Cushing College",
					"Central New England College of Technology": "Central New England College of Te\
chnology",
					"Chamberlayne Junior College": "Chamberlayne Junior College",
					"Clark University": "Clark University",
					"College of The Holy Cross": "College of The Holy Cross",
					"Curry College": "Curry College",
					"Dean Junior College": "Dean Junior College",
					"East Coast Aero Technical School": "East Coast Aero Technical School",
					"Eastern Nazarene College": "Eastern Nazarene College",
					"Elms College": "Elms College",
					"Emerson College": "Emerson College",
					"Emmanuel College": "Emmanuel College",
					"Endicott College": "Endicott College",
					"Essex Agriculture and Technical Institute": "Essex Agriculture and Technical I\
nstitute",
					"Fanning School Health Tec": "Fanning School Health Tec",
					"Fisher Junior College": "Fisher Junior College",
					"Fitchburg State College": "Fitchburg State College",
					"Forsyth School of Dental Hygiene": "Forsyth School of Dental Hygiene",
					"Framingham State College": "Framingham State College",
					"Franklin Institute of Boston": "Franklin Institute of Boston",
					"Gordon College": "Gordon College",
					"Gordon-Conwell Theological Seminary": "Gordon-Conwell Theological Seminary",
					"Greenfield Community College": "Greenfield Community College",
					"Hampshire College": "Hampshire College",
					"Harvard University": "Harvard University",
					"Hebrew College": "Hebrew College",
					"Hellenic College": "Hellenic College",
					"Holyoke Community College": "Holyoke Community College",
					"Katharine Gibbs School Boston": "Katharine Gibbs School Boston",
					"Laboure Junior College": "Laboure Junior College",
					"Lasell Junior College": "Lasell Junior College",
					"Lesley University": "Lesley University",
					"Marian Court Junior College of Business": "Marian Court Junior College of Busi\
ness",
					"Massachusetts Bay Community College": "Massachusetts Bay Community College",
					"Massachusetts College of Art": "Massachusetts College of Art",
					"Massachusetts College of Liberal Arts": "Massachusetts College of Liberal Arts\
",
					"Massachusetts College of Pharmacy": "Massachusetts College of Pharmacy",
					"Massachusetts Institute of Technology": "Massachusetts Institute of Technology\
",
					"Massachusetts Maritime Academy": "Massachusetts Maritime Academy",
					"Massasoit Community College": "Massasoit Community College",
					"Merrimack College": "Merrimack College",
					"Middlesex Community College": "Middlesex Community College",
					"Montserrat College of Art": "Montserrat College of Art",
					"Mount Holyoke College": "Mount Holyoke College",
					"Mount Ida College": "Mount Ida College",
					"MT Wachusett Community College": "MT Wachusett Community College",
					"New England College of Optometry": "New England College of Optometry",
					"New England Conservatory of Music": "New England Conservatory of Music",
					"New England Institute of Applied Arts and Sciences": "New England Institute of\
 Applied Arts and Sciences",
					"New England School of Art/Design": "New England School of Art/Design",
					"Newbury College": "Newbury College",
					"Newbury Junior College-Boston": "Newbury Junior College-Boston",
					"Newton Junior College": "Newton Junior College",
					"Nichols College": "Nichols College",
					"North Shore Community College": "North Shore Community College",
					"Northeast Institute Industrial Tech": "Northeast Institute Industrial Tech",
					"Northeastern University": "Northeastern University",
					"Northern Essex Community College": "Northern Essex Community College",
					"Pine Manor College": "Pine Manor College",
					"Pope John Xxiii National Seminary": "Pope John Xxiii National Seminary",
					"Quincy Junior College": "Quincy Junior College",
					"Quinsigamond Community College": "Quinsigamond Community College",
					"Radcliff College": "Radcliff College",
					"Regis College": "Regis College",
					"Roxbury Community College": "Roxbury Community College",
					"Salem State College": "Salem State College",
					"School of The Museum of Fine Arts": "School of The Museum of Fine Arts",
					"Simmons College": "Simmons College",
					"Simons Rock of Bard College": "Simons Rock of Bard College",
					"Smith College": "Smith College",
					"Springfield College": "Springfield College",
					"Springfield Technical Community College": "Springfield Technical Community Col\
lege",
					"St Hyacinth College and Seminary": "St Hyacinth College and Seminary",
					"St Johns Seminary": "St Johns Seminary",
					"Stockbridge Sch of Ag at Univ of Massachusetts": "Stockbridge Sch of Ag at Uni\
v of Massachusetts",
					"Stonehill College": "Stonehill College",
					"Suffolk University": "Suffolk University",
					"Swain School of Design": "Swain School of Design",
					"The Boston Conservatory of Music": "The Boston Conservatory of Music",
					"The Center for Cross-Cultural Study, Inc": "The Center for Cross-Cultural Stud\
y, Inc",
					"The New England Institute of Art": "The New England Institute of Art",
					"Tufts University": "Tufts University",
					"University of Massachusetts at Amherst": "University of Massachusetts at Amher\
st",
					"University of Massachusetts at Boston": "University of Massachusetts at Boston\
",
					"University of Massachusetts Dartmouth": "University of Massachusetts Dartmouth\
",
					"University of Massachusetts Lowell": "University of Massachusetts Lowell",
					"University of Massachusetts Medical School": "University of Massachusetts Medi\
cal School",
					"Wellesley College": "Wellesley College",
					"Wentworth Institute of Technology": "Wentworth Institute of Technology",
					"Western New England College": "Western New England College",
					"Westfield State College": "Westfield State College",
					"Weston School of Theology": "Weston School of Theology",
					"Wheaton College": "Wheaton College",
					"Wheelock College": "Wheelock College",
					"Williams College": "Williams College",
					"Worcester Industrial Technical Institute": "Worcester Industrial Technical Ins\
titute",
					"Worcester Junior College": "Worcester Junior College",
					"Worcester Polytechnic Institute": "Worcester Polytechnic Institute",
					"Worcester State College": "Worcester State College",
					"Other": "Other"
				};
				break;
			case "Maryland":
				newOpts = {
					"": "",
					"Allegany Community College": "Allegany Community College",
					"Anne Arundel Community College": "Anne Arundel Community College",
					"Antietam Bible College": "Antietam Bible College",
					"Arlington Bible College": "Arlington Bible College",
					"Baltimore City Community College": "Baltimore City Community College",
					"Baltimore International College": "Baltimore International College",
					"Bowie State University": "Bowie State University",
					"Capitol College": "Capitol College",
					"Carroll Community College": "Carroll Community College",
					"Cecil Community College": "Cecil Community College",
					"Chesapeake College": "Chesapeake College",
					"College of Notre Dame of Maryland": "College of Notre Dame of Maryland",
					"College of Southern Maryland": "College of Southern Maryland",
					"Columbia Union College": "Columbia Union College",
					"Community College of Baltimore County Catonsville": "Community College of Balt\
imore County Catonsville",
					"Community College of Baltimore Harbor Campus": "Community College of Baltimore\
 Harbor Campus",
					"Community College of Baltimore Liberty Campus": "Community College of Baltimor\
e Liberty Campus",
					"Coppin State College": "Coppin State College",
					"Dundalk Community College": "Dundalk Community College",
					"Eastern Christian College": "Eastern Christian College",
					"Essex Community College": "Essex Community College",
					"Frederick Community College": "Frederick Community College",
					"Frostburg State University": "Frostburg State University",
					"Garrett Community College": "Garrett Community College",
					"Goucher Co Post-Bacc": "Goucher Co Post-Bacc",
					"Goucher College": "Goucher College",
					"Hagerstown Community College": "Hagerstown Community College",
					"Harford Community College": "Harford Community College",
					"Hood College": "Hood College",
					"Howard Community College": "Howard Community College",
					"Johns Hopkins University": "Johns Hopkins University",
					"Loyola College": "Loyola College",
					"Maryland College of Art and Design": "Maryland College of Art and Design",
					"Maryland Institute, College of Art": "Maryland Institute, College of Art",
					"McDaniel College": "McDaniel College",
					"Montgomery College Germantown": "Montgomery College Germantown",
					"Montgomery College Rockville": "Montgomery College Rockville",
					"Montgomery College Takoma Park": "Montgomery College Takoma Park",
					"Morgan State University": "Morgan State University",
					"Mount St Marys College Maryland": "Mount St Marys College Maryland",
					"National Labor College": "National Labor College",
					"Ocean City College": "Ocean City College",
					"Prince Georges Community College": "Prince Georges Community College",
					"Saint Marys College of Maryland": "Saint Marys College of Maryland",
					"Saint Marys Seminary and University": "Saint Marys Seminary and University",
					"Salisbury University": "Salisbury University",
					"Sojourner-Douglass College": "Sojourner-Douglass College",
					"St Johns College Maryland": "St Johns College Maryland",
					"Stevenson University": "Stevenson University",
					"Towson University": "Towson University",
					"Uniformed Services University of Health Science": "Uniformed Services Universi\
ty of Health Science",
					"United States Naval Academy": "United States Naval Academy",
					"University of Baltimore": "University of Baltimore",
					"University of Maryland at Baltimore": "University of Maryland at Baltimore",
					"University of Maryland at College Park": "University of Maryland at College Pa\
rk",
					"University of Maryland Baltimore County": "University of Maryland Baltimore Co\
unty",
					"University of Maryland Eastern Shore": "University of Maryland Eastern Shore",
					"University of Maryland University College": "University of Maryland University\
 College",
					"Washington Bible College": "Washington Bible College",
					"Washington College": "Washington College",
					"Western Maryland College": "Western Maryland College",
					"Wor-Wic Community College": "Wor-Wic Community College",
					"Other": "Other"
				};
				break;
			case "Maine":
				newOpts = {
					"": "",
					"Bangor Community College of Maine University": "Bangor Community College of Ma\
ine University",
					"Bates College": "Bates College",
					"Beal College": "Beal College",
					"Bowdoin College": "Bowdoin College",
					"Casco Bay College": "Casco Bay College",
					"Central Maine Vocational-Technical Institute": "Central Maine Vocational-Techn\
ical Institute",
					"Colby College": "Colby College",
					"College of The Atlantic": "College of The Atlantic",
					"Eastern Maine Vocational-Technical Institute": "Eastern Maine Vocational-Techn\
ical Institute",
					"Husson College": "Husson College",
					"Kennebec Valley Vocational-Technical Institute": "Kennebec Valley Vocational-T\
echnical Institute",
					"Maine College of Art": "Maine College of Art",
					"Maine Maritime Academy": "Maine Maritime Academy",
					"Northern Maine Community College": "Northern Maine Community College",
					"Portland School of Art": "Portland School of Art",
					"Saint Joseph's College": "Saint Joseph's College",
					"Southern Maine Community College": "Southern Maine Community College",
					"Thomas College Maine": "Thomas College Maine",
					"Unity College": "Unity College",
					"University of Maine": "University of Maine",
					"University of Maine at Augusta": "University of Maine at Augusta",
					"University of Maine at Bangor": "University of Maine at Bangor",
					"University of Maine at Farmington": "University of Maine at Farmington",
					"University of Maine at Fort Kent": "University of Maine at Fort Kent",
					"University of Maine at Machias": "University of Maine at Machias",
					"University of Maine at Presque Isle": "University of Maine at Presque Isle",
					"University of New England": "University of New England",
					"University of Southern Maine": "University of Southern Maine",
					"Washington County Vocational-Technical Institute": "Washington County Vocation\
al-Technical Institute",
					"Westbrook College": "Westbrook College",
					"York County Community College": "York County Community College",
					"Other": "Other"
				};
				break;
			case "Michigan":
				newOpts = {
					"": "",
					"Adrian College": "Adrian College",
					"Albion College": "Albion College",
					"Alma College": "Alma College",
					"Alpena Community College": "Alpena Community College",
					"Andrews University": "Andrews University",
					"Aquinas College": "Aquinas College",
					"Ave Maria College": "Ave Maria College",
					"Baker College of Clinton Township": "Baker College of Clinton Township",
					"Baker College of Flint": "Baker College of Flint",
					"Baker College of Muskegon": "Baker College of Muskegon",
					"Baker College of Owosso": "Baker College of Owosso",
					"Bay De Noc Community College": "Bay De Noc Community College",
					"Bay Mills Community College": "Bay Mills Community College",
					"Calvin College": "Calvin College",
					"Central Michigan University": "Central Michigan University",
					"Charles Stewart Mott College": "Charles Stewart Mott College",
					"Cleary College": "Cleary College",
					"College for Creative Studies": "College for Creative Studies",
					"Concordia College": "Concordia College",
					"Cornerstone University": "Cornerstone University",
					"Davenport College of Business - Lansing": "Davenport College of Business - Lan\
sing",
					"Davenport University": "Davenport University",
					"Davenport University - Dearborn": "Davenport University - Dearborn",
					"Davenport University - Midland": "Davenport University - Midland",
					"Delta College": "Delta College",
					"Detroit Engrg Institute": "Detroit Engrg Institute",
					"Detroit Institute of Technology": "Detroit Institute of Technology",
					"Eastern Michigan University": "Eastern Michigan University",
					"Ferris State University": "Ferris State University",
					"Finlandia University": "Finlandia University",
					"Glen Oaks Community College": "Glen Oaks Community College",
					"Gmi Engineering & Management Institute": "Gmi Engineering & Management Institu\
te",
					"Gogebic Community College": "Gogebic Community College",
					"Grace Bible College": "Grace Bible College",
					"Grand Rapids Baptist College and Seminary": "Grand Rapids Baptist College and \
Seminary",
					"Grand Rapids Community College": "Grand Rapids Community College",
					"Grand Valley State University": "Grand Valley State University",
					"Henry Ford Community College": "Henry Ford Community College",
					"Highland Park Community College": "Highland Park Community College",
					"Hillsdale College": "Hillsdale College",
					"Hope College": "Hope College",
					"Jackson Community College": "Jackson Community College",
					"Jordan College": "Jordan College",
					"Kalamazoo College": "Kalamazoo College",
					"Kalamazoo Valley Community College": "Kalamazoo Valley Community College",
					"Kellogg Community College": "Kellogg Community College",
					"Kettering University": "Kettering University",
					"Kirtland Community College": "Kirtland Community College",
					"Lake Michigan College": "Lake Michigan College",
					"Lake Superior State University": "Lake Superior State University",
					"Lansing Community College": "Lansing Community College",
					"Lawrence Institute of Technology": "Lawrence Institute of Technology",
					"Lewis College of Business": "Lewis College of Business",
					"Mackinac College": "Mackinac College",
					"Macomb Community College": "Macomb Community College",
					"Macomb Community College Center": "Macomb Community College Center",
					"Madonna College": "Madonna College",
					"Marygrove College": "Marygrove College",
					"Mercy College of Detroit": "Mercy College of Detroit",
					"Michigan State University": "Michigan State University",
					"Michigan Technological University": "Michigan Technological University",
					"Mid Michigan Community College": "Mid Michigan Community College",
					"Monroe County Community College": "Monroe County Community College",
					"Montcalm Community College": "Montcalm Community College",
					"Muskegon Business College": "Muskegon Business College",
					"Muskegon Community College": "Muskegon Community College",
					"Nazareth College Kalamazoo": "Nazareth College Kalamazoo",
					"North Central Michigan College": "North Central Michigan College",
					"Northern Michigan University": "Northern Michigan University",
					"Northwestern Michigan College": "Northwestern Michigan College",
					"Northwood University": "Northwood University",
					"Oakland Community College Bloomfield Hills": "Oakland Community College Bloomf\
ield Hills",
					"Oakland University": "Oakland University",
					"Olivet College": "Olivet College",
					"Reformed Bible College": "Reformed Bible College",
					"Rochester College": "Rochester College",
					"Sacred Heart Seminary": "Sacred Heart Seminary",
					"Saginaw Valley State University": "Saginaw Valley State University",
					"Saint Clair County Community College": "Saint Clair County Community College",
					"Schoolcraft College": "Schoolcraft College",
					"Siena Heights College": "Siena Heights College",
					"Southwestern Michigan College": "Southwestern Michigan College",
					"Spring Arbor College": "Spring Arbor College",
					"St Marys College Michigan": "St Marys College Michigan",
					"Thomas Cooley Law School": "Thomas Cooley Law School",
					"University of Detroit": "University of Detroit",
					"University of Detroit/Mercy": "University of Detroit/Mercy",
					"University of Michigan, Ann Arbor": "University of Michigan, Ann Arbor",
					"University of Michigan, Dearborn": "University of Michigan, Dearborn",
					"University of Michigan, Flint": "University of Michigan, Flint",
					"Walsh College": "Walsh College",
					"Washtenaw Community College": "Washtenaw Community College",
					"Wayne County Community College": "Wayne County Community College",
					"Wayne State University": "Wayne State University",
					"West Shore Community College": "West Shore Community College",
					"Western Michigan University": "Western Michigan University",
					"William Tyndale College": "William Tyndale College",
					"Other": "Other"
				};
				break;
			case "Minnesota":
				newOpts = {
					"": "",
					"Alexandria Technical College": "Alexandria Technical College",
					"Anoka Tech Coll Formerly Anoka-Hennepin Tech Coll": "Anoka Tech Coll Formerly \
Anoka-Hennepin Tech Coll",
					"Anoka-Ramsey Community College": "Anoka-Ramsey Community College",
					"Argosy University": "Argosy University",
					"Augsburg College": "Augsburg College",
					"Austin Community College Minnesota": "Austin Community College Minnesota",
					"Bemidji State University": "Bemidji State University",
					"Bethany Lutheran College": "Bethany Lutheran College",
					"Bethel Theological Seminary": "Bethel Theological Seminary",
					"Bethel University": "Bethel University",
					"Brown Institute": "Brown Institute",
					"Capella University": "Capella University",
					"Carleton College": "Carleton College",
					"Central Lakes College": "Central Lakes College",
					"Century College": "Century College",
					"College of St Benedict": "College of St Benedict",
					"College of St Catherine": "College of St Catherine",
					"College of St Scholastica": "College of St Scholastica",
					"College of St Teresa": "College of St Teresa",
					"College of Visual Arts": "College of Visual Arts",
					"Concordia College": "Concordia College",
					"Concordia College St Paul": "Concordia College St Paul",
					"Crosier Seminary Junior College": "Crosier Seminary Junior College",
					"Crown College": "Crown College",
					"Dakota County Technical College": "Dakota County Technical College",
					"Dr Martin Luther College": "Dr Martin Luther College",
					"Dunwoody College of Technology": "Dunwoody College of Technology",
					"Fergus Falls Community College": "Fergus Falls Community College",
					"Fond Du Lac Tribal and Community College": "Fond Du Lac Tribal and Community C\
ollege",
					"Globe University": "Globe University",
					"Golden Valley Lutheran College": "Golden Valley Lutheran College",
					"Gustavus Adolphus College": "Gustavus Adolphus College",
					"Hamline University": "Hamline University",
					"Hennepin Technical College": "Hennepin Technical College",
					"Hibbing Community College": "Hibbing Community College",
					"Inver Hills Community College": "Inver Hills Community College",
					"Itasca Community College": "Itasca Community College",
					"Lake Superior College": "Lake Superior College",
					"Luther Northwestern Theological Seminary": "Luther Northwestern Theological Se\
minary",
					"Macalester College": "Macalester College",
					"Martin Luther College": "Martin Luther College",
					"Medical Institute of Minnesota": "Medical Institute of Minnesota",
					"Mesabi Community College": "Mesabi Community College",
					"Metropolitan State University": "Metropolitan State University",
					"Minneapolis College of Art and Design": "Minneapolis College of Art and Design\
",
					"Minneapolis Community and Technical College": "Minneapolis Community and Techn\
ical College",
					"Minneapolis Community College": "Minneapolis Community College",
					"Minnesota Bible College": "Minnesota Bible College",
					"Minnesota State College-Southeast Technical": "Minnesota State College-Southea\
st Technical",
					"Minnesota State Community & Technical College": "Minnesota State Community & T\
echnical College",
					"Minnesota State University": "Minnesota State University",
					"Minnesota State University Moorhead": "Minnesota State University Moorhead",
					"Minnesota West Community and Technical College": "Minnesota West Community and\
 Technical College",
					"Normandale Community College": "Normandale Community College",
					"North Central Bible College": "North Central Bible College",
					"North Central University": "North Central University",
					"North Hennepin Community College": "North Hennepin Community College",
					"Northland Community College": "Northland Community College",
					"Northwestern College of Chiropractic": "Northwestern College of Chiropractic",
					"Pine Technical & Community College": "Pine Technical & Community College",
					"Rainy River Community College": "Rainy River Community College",
					"Rasmussen College": "Rasmussen College",
					"Ridgewater College": "Ridgewater College",
					"Riverland Community College": "Riverland Community College",
					"Rochester Community College": "Rochester Community College",
					"Saint Paul College A Community & Technical College": "Saint Paul College A Com\
munity & Technical College",
					"South Central Technical College": "South Central Technical College",
					"Southwest Minnesota State Univ": "Southwest Minnesota State Univ",
					"Southwest State University": "Southwest State University",
					"St Catherine University": "St Catherine University",
					"St Cloud State University": "St Cloud State University",
					"St Cloud Technical College": "St Cloud Technical College",
					"St Johns University": "St Johns University",
					"St Marys College of Minnesota": "St Marys College of Minnesota",
					"St Olaf College": "St Olaf College",
					"University of Minnesota": "University of Minnesota",
					"University of Minnesota-Crookston": "University of Minnesota-Crookston",
					"University of Minnesota-Duluth": "University of Minnesota-Duluth",
					"University of Minnesota-Morris": "University of Minnesota-Morris",
					"University of Minnesota-Waseca": "University of Minnesota-Waseca",
					"University of Northwestern": "University of Northwestern",
					"University of St Thomas": "University of St Thomas",
					"Vermilion Community College": "Vermilion Community College",
					"Walden University": "Walden University",
					"Winona State University": "Winona State University",
					"Other": "Other"
				};
				break;
			case "Missouri":
				newOpts = {
					"": "",
					"Assemblies of God Theological Seminary": "Assemblies of God Theological Semina\
ry",
					"Avila College": "Avila College",
					"Calvary Bible College": "Calvary Bible College",
					"Cardinal Newman College": "Cardinal Newman College",
					"Central Bible College": "Central Bible College",
					"Central Christian College of The Bible": "Central Christian College of The Bib\
le",
					"Central Methodist University": "Central Methodist University",
					"Chamberlain College of Nursing": "Chamberlain College of Nursing",
					"College of The Ozarks": "College of The Ozarks",
					"Columbia College": "Columbia College",
					"Conception Seminary College": "Conception Seminary College",
					"Concordia Seminary": "Concordia Seminary",
					"Cottey College": "Cottey College",
					"Crowder College": "Crowder College",
					"Culver-Stockton College": "Culver-Stockton College",
					"Devry Institute of Technology": "Devry Institute of Technology",
					"Drury University": "Drury University",
					"East Central College": "East Central College",
					"Evangel University": "Evangel University",
					"Fontbonne College": "Fontbonne College",
					"Gateway College Evanglsm": "Gateway College Evanglsm",
					"Global University": "Global University",
					"Hannibal-Lagrange College": "Hannibal-Lagrange College",
					"Harris-Stowe State College": "Harris-Stowe State College",
					"Jefferson College": "Jefferson College",
					"Kansas City Art Institute": "Kansas City Art Institute",
					"Kemper Military Junior College": "Kemper Military Junior College",
					"Lincoln University": "Lincoln University",
					"Lindenwood University": "Lindenwood University",
					"Living Word College": "Living Word College",
					"Logan College of Chiropractic": "Logan College of Chiropractic",
					"Longview Community College": "Longview Community College",
					"Maple Woods Community College": "Maple Woods Community College",
					"Maryville University": "Maryville University",
					"Metropolitan Community Colleges": "Metropolitan Community Colleges",
					"Midwestern Baptist Theological Seminary": "Midwestern Baptist Theological Semi\
nary",
					"Mineral Area College": "Mineral Area College",
					"Missouri Baptist University": "Missouri Baptist University",
					"Missouri Hills School": "Missouri Hills School",
					"Missouri Southern State College": "Missouri Southern State College",
					"Missouri State University": "Missouri State University",
					"Missouri State University - West Plains": "Missouri State University - West Pl\
ains",
					"Missouri Univ of Science & Technology": "Missouri Univ of Science & Technology\
",
					"Missouri Valley College": "Missouri Valley College",
					"Missouri Western State College": "Missouri Western State College",
					"Moberly Area Community College": "Moberly Area Community College",
					"Nazarene Theological Seminary": "Nazarene Theological Seminary",
					"North Central Missouri College": "North Central Missouri College",
					"Northwest Missouri State University": "Northwest Missouri State University",
					"Ozark Christian College": "Ozark Christian College",
					"Ozarks Technical Community College": "Ozarks Technical Community College",
					"Park University": "Park University",
					"Penn Valley Community College": "Penn Valley Community College",
					"Pioneer Community College": "Pioneer Community College",
					"Platt College": "Platt College",
					"Ranken Technical College": "Ranken Technical College",
					"Research College of Nursing": "Research College of Nursing",
					"Rockhurst University": "Rockhurst University",
					"Saint Marys College of O'Fallon": "Saint Marys College of O'Fallon",
					"Saint Paul School of Theology": "Saint Paul School of Theology",
					"Southeast Missouri State University": "Southeast Missouri State University",
					"Southwest Baptist University": "Southwest Baptist University",
					"St Charles Community College": "St Charles Community College",
					"St Charles County Community College": "St Charles County Community College",
					"St Louis College of Pharmacy": "St Louis College of Pharmacy",
					"St Louis Community College at Florissant Valley": "St Louis Community College \
at Florissant Valley",
					"St Louis Community College at Forest Park": "St Louis Community College at For\
est Park",
					"St Louis Community College at Meramec": "St Louis Community College at Meramec\
",
					"St Louis Conservatory of Music": "St Louis Conservatory of Music",
					"St Louis University": "St Louis University",
					"State Fair Community College": "State Fair Community College",
					"Stephens College": "Stephens College",
					"Tarkio College": "Tarkio College",
					"Three Rivers Community College": "Three Rivers Community College",
					"Truman State University": "Truman State University",
					"University of Central Missouri": "University of Central Missouri",
					"University of Missouri, Columbia": "University of Missouri, Columbia",
					"University of Missouri, Kansas City": "University of Missouri, Kansas City",
					"University of Missouri, St Louis": "University of Missouri, St Louis",
					"Washington University": "Washington University",
					"Webster University": "Webster University",
					"Wentworth Military Academy and Junior College": "Wentworth Military Academy an\
d Junior College",
					"Westminster College": "Westminster College",
					"William Jewell College": "William Jewell College",
					"William Woods College": "William Woods College",
					"Other": "Other"
				};
				break;
			case "Northern Mariana Islands":
				newOpts = {
					"": "",
					"Northern Marianas College": "Northern Marianas College",
					"Other": "Other"
				};
				break;
			case "Mississippi":
				newOpts = {
					"": "",
					"Alcorn State University": "Alcorn State University",
					"Belhaven College": "Belhaven College",
					"Blue Mountain College": "Blue Mountain College",
					"Clarke College Mississippi": "Clarke College Mississippi",
					"Coahoma Junior College": "Coahoma Junior College",
					"Copiah-Lincoln Junior College": "Copiah-Lincoln Junior College",
					"Delta State University": "Delta State University",
					"East Central Community College": "East Central Community College",
					"East Mississippi Community College": "East Mississippi Community College",
					"Hinds Community College": "Hinds Community College",
					"Holmes Junior College": "Holmes Junior College",
					"Itawamba Community College": "Itawamba Community College",
					"Jackson State University": "Jackson State University",
					"Jones County Junior College": "Jones County Junior College",
					"Mary Holmes College": "Mary Holmes College",
					"Meridian Junior College": "Meridian Junior College",
					"Millsaps College": "Millsaps College",
					"Mississippi College": "Mississippi College",
					"Mississippi Delta Junior College": "Mississippi Delta Junior College",
					"Mississippi Gulf Coast Community College": "Mississippi Gulf Coast Community C\
ollege",
					"Mississippi Gulf Coast Junior College": "Mississippi Gulf Coast Junior College\
",
					"Mississippi Gulf Coast Junior College": "Mississippi Gulf Coast Junior College\
",
					"Mississippi State University": "Mississippi State University",
					"Mississippi University for Women": "Mississippi University for Women",
					"Mississippi Valley State University": "Mississippi Valley State University",
					"Northeast Mississippi Community College": "Northeast Mississippi Community Col\
lege",
					"Northwest Mississippi Community College": "Northwest Mississippi Community Col\
lege",
					"Pearl River Junior College": "Pearl River Junior College",
					"Phillips Junior College": "Phillips Junior College",
					"Prentiss Normal/Industrial College": "Prentiss Normal/Industrial College",
					"Rust College": "Rust College",
					"Southeastern Baptist College": "Southeastern Baptist College",
					"Southwest Mississippi Junior College": "Southwest Mississippi Junior College",
					"Tougaloo College": "Tougaloo College",
					"University of Mississippi": "University of Mississippi",
					"University of Southern Mississippi": "University of Southern Mississippi",
					"Wesley College": "Wesley College",
					"William Carey College": "William Carey College",
					"Wood Junior College": "Wood Junior College",
					"Other": "Other"
				};
				break;
			case "Montana":
				newOpts = {
					"": "",
					"Blackfeet Community College": "Blackfeet Community College",
					"Carroll College": "Carroll College",
					"Chief Dull Knife College": "Chief Dull Knife College",
					"Dawson Community College": "Dawson Community College",
					"Deer Lodge College": "Deer Lodge College",
					"Dull Knife Memorial Community College": "Dull Knife Memorial Community College\
",
					"Flathead Valley Community College": "Flathead Valley Community College",
					"Fort Belknap College": "Fort Belknap College",
					"Fort Peck Community College": "Fort Peck Community College",
					"Glacier College": "Glacier College",
					"Helena College": "Helena College",
					"Intermountain Community College": "Intermountain Community College",
					"Little Big Horn College": "Little Big Horn College",
					"Miles Community College": "Miles Community College",
					"Mission Mountain College": "Mission Mountain College",
					"Missoula Vocational-Technical Center": "Missoula Vocational-Technical Center",
					"Montana State Univ Coll of Technology-Great Falls": "Montana State Univ Coll o\
f Technology-Great Falls",
					"Montana State University, Billings": "Montana State University, Billings",
					"Montana State University, Bozeman": "Montana State University, Bozeman",
					"Montana State University, Northern": "Montana State University, Northern",
					"Montana Tech of The University of Montana": "Montana Tech of The University of\
 Montana",
					"Montana Wilderness School of The Bible": "Montana Wilderness School of The Bib\
le",
					"Mountain States Baptist College": "Mountain States Baptist College",
					"Rocky Mountain College": "Rocky Mountain College",
					"Salish Kootenai College": "Salish Kootenai College",
					"Stone Child College": "Stone Child College",
					"The University of Montana - Western": "The University of Montana - Western",
					"University of Great Falls": "University of Great Falls",
					"University of Montana": "University of Montana",
					"Other": "Other"
				};
				break;
			case "North Carolina":
				newOpts = {
					"": "",
					"Alamance Community College": "Alamance Community College",
					"Alpha & Omega Christian College": "Alpha & Omega Christian College",
					"American Business / Fashion Institute": "American Business / Fashion Institute\
",
					"Appalachian State University": "Appalachian State University",
					"Ashville-Buncombe Technical College": "Ashville-Buncombe Technical College",
					"Barber-Scotia College": "Barber-Scotia College",
					"Barton College": "Barton College",
					"Beaufort County Community College": "Beaufort County Community College",
					"Belmont Abbey College": "Belmont Abbey College",
					"Bennett College North Carolina": "Bennett College North Carolina",
					"Bladen Community College": "Bladen Community College",
					"Blantons Junior College": "Blantons Junior College",
					"Blue Ridge Community College": "Blue Ridge Community College",
					"Bowman Gray School of Medecine": "Bowman Gray School of Medecine",
					"Brevard College": "Brevard College",
					"Brookstone College of Business": "Brookstone College of Business",
					"Brunswick Community College": "Brunswick Community College",
					"Caldwell Community College and Technical Institute": "Caldwell Community Colle\
ge and Technical Institute",
					"Campbell University": "Campbell University",
					"Cape Fear Community College": "Cape Fear Community College",
					"Carolinas College of Health Sciences": "Carolinas College of Health Sciences",
					"Carteret Technical College": "Carteret Technical College",
					"Catawba College": "Catawba College",
					"Catawba Valley Community College": "Catawba Valley Community College",
					"Catawba Valley Tech College": "Catawba Valley Tech College",
					"Central Carolina Community College": "Central Carolina Community College",
					"Central Piedmont Community College": "Central Piedmont Community College",
					"Chowan College": "Chowan College",
					"Cleveland Community College": "Cleveland Community College",
					"Coastal Carolina Community College": "Coastal Carolina Community College",
					"College of The Albemarle": "College of The Albemarle",
					"Craven Community College": "Craven Community College",
					"Davidson College": "Davidson College",
					"Davidson County Community College": "Davidson County Community College",
					"Duke University": "Duke University",
					"Duke University Allied Health Program": "Duke University Allied Health Program\
",
					"Durham Technical Community College": "Durham Technical Community College",
					"East Carolina University": "East Carolina University",
					"Edgecombe Technical College": "Edgecombe Technical College",
					"Elizabeth City State University": "Elizabeth City State University",
					"Elon College": "Elon College",
					"Fayetteville State University": "Fayetteville State University",
					"Fayetteville Technical Community College": "Fayetteville Technical Community C\
ollege",
					"Forsyth Technical College": "Forsyth Technical College",
					"Gardner-Webb College": "Gardner-Webb College",
					"Gaston College": "Gaston College",
					"Greensboro College": "Greensboro College",
					"Guilford College": "Guilford College",
					"Guilford Technical Community College, Jamestown": "Guilford Technical Communit\
y College, Jamestown",
					"Halifax Community College": "Halifax Community College",
					"Hardbarger Junior College of Business": "Hardbarger Junior College of Business\
",
					"Haywood Community College": "Haywood Community College",
					"High Point University": "High Point University",
					"Isothermal Community College": "Isothermal Community College",
					"James Sprunt Community College": "James Sprunt Community College",
					"John Wesley College": "John Wesley College",
					"Johnson C Smith University": "Johnson C Smith University",
					"Johnston Community College": "Johnston Community College",
					"Kings College": "Kings College",
					"Lees-McRae College": "Lees-McRae College",
					"Lenoir Community College": "Lenoir Community College",
					"Lenoir-Rhyne College": "Lenoir-Rhyne College",
					"Livingstone College": "Livingstone College",
					"Louisburg College": "Louisburg College",
					"Manna Christian College": "Manna Christian College",
					"Mars Hill College": "Mars Hill College",
					"Martin Community College": "Martin Community College",
					"Mayland Community College": "Mayland Community College",
					"McDowell Technical Community College": "McDowell Technical Community College",
					"Meredith College": "Meredith College",
					"Methodist University": "Methodist University",
					"Miller-Motte Business College": "Miller-Motte Business College",
					"Mitchell Community College": "Mitchell Community College",
					"Montreat College": "Montreat College",
					"Mount Olive College": "Mount Olive College",
					"Nash Community College": "Nash Community College",
					"North Carolina Agricultural & Technical State Univ": "North Carolina Agricultu\
ral & Technical State Univ",
					"North Carolina Central University": "North Carolina Central University",
					"North Carolina State University": "North Carolina State University",
					"North Carolina Wesleyan College": "North Carolina Wesleyan College",
					"Pamlico Community College": "Pamlico Community College",
					"Peace College": "Peace College",
					"Pfeiffer College": "Pfeiffer College",
					"Piedmont Bible College": "Piedmont Bible College",
					"Piedmont Community College": "Piedmont Community College",
					"Pitt Community College": "Pitt Community College",
					"Queens University of Charlotte": "Queens University of Charlotte",
					"Randolph Community College": "Randolph Community College",
					"Randolph Technical College": "Randolph Technical College",
					"Richmond Community College": "Richmond Community College",
					"Roanoke Bible College": "Roanoke Bible College",
					"Roanoke-Chowan Community College": "Roanoke-Chowan Community College",
					"Robeson Community College": "Robeson Community College",
					"Rockingham Community College": "Rockingham Community College",
					"Rowan-Cabarrus Community": "Rowan-Cabarrus Community",
					"Rutledge College, Raleigh": "Rutledge College, Raleigh",
					"Saint Marys College": "Saint Marys College",
					"Salem College North Carolina": "Salem College North Carolina",
					"Sampson Community College": "Sampson Community College",
					"Sandhills Community College": "Sandhills Community College",
					"Shaw University": "Shaw University",
					"South Piedmont Community College": "South Piedmont Community College",
					"Southeastern Community College": "Southeastern Community College",
					"Southwestern Community College": "Southwestern Community College",
					"St Andrews Presbyterian College": "St Andrews Presbyterian College",
					"St Augustines College": "St Augustines College",
					"Stanly Community College": "Stanly Community College",
					"Surry Community College": "Surry Community College",
					"Tri-County Community College": "Tri-County Community College",
					"University of North Carolina at Asheville": "University of North Carolina at A\
sheville",
					"University of North Carolina at Chapel Hill": "University of North Carolina at\
 Chapel Hill",
					"University of North Carolina at Charlotte": "University of North Carolina at C\
harlotte",
					"University of North Carolina at Greensboro": "University of North Carolina at \
Greensboro",
					"University of North Carolina at Pembroke": "University of North Carolina at Pe\
mbroke",
					"University of North Carolina at Wilmington": "University of North Carolina at \
Wilmington",
					"University of North Carolina School of The Arts": "University of North Carolin\
a School of The Arts",
					"Vance-Granville Community College": "Vance-Granville Community College",
					"Wake Forest University": "Wake Forest University",
					"Wake Technical College": "Wake Technical College",
					"Warren Wilson College": "Warren Wilson College",
					"Wayne Community College": "Wayne Community College",
					"Western Carolina University": "Western Carolina University",
					"Western Piedmont Community College": "Western Piedmont Community College",
					"Wilkes Community College": "Wilkes Community College",
					"William Carter College": "William Carter College",
					"Wilson County Technical College": "Wilson County Technical College",
					"Wingate College": "Wingate College",
					"Winston-Salem State University": "Winston-Salem State University",
					"Other": "Other"
				};
				break;
			case "North Dakota":
				newOpts = {
					"": "",
					"Bismarck State College": "Bismarck State College",
					"Dakota College at Bottineau": "Dakota College at Bottineau",
					"Dickinson State University": "Dickinson State University",
					"Fort Berthold Community College": "Fort Berthold Community College",
					"Jamestown College": "Jamestown College",
					"Lake Region State College": "Lake Region State College",
					"Little Hoop Community College": "Little Hoop Community College",
					"Mayville State University": "Mayville State University",
					"Med Center One College of Nursing": "Med Center One College of Nursing",
					"Minot State University, Minot": "Minot State University, Minot",
					"North Dakota State College of Science": "North Dakota State College of Science\
",
					"North Dakota State University": "North Dakota State University",
					"North Dakota State University - Bottineau": "North Dakota State University - B\
ottineau",
					"Northwest Bible College": "Northwest Bible College",
					"Rasmussen College": "Rasmussen College",
					"Rasmussen College": "Rasmussen College",
					"Standing Rock Community College": "Standing Rock Community College",
					"Tri-College University": "Tri-College University",
					"Trinity Bible College": "Trinity Bible College",
					"Turtle Mountain Community College": "Turtle Mountain Community College",
					"United Tribes Technical College": "United Tribes Technical College",
					"University of Mary": "University of Mary",
					"University of North Dakota": "University of North Dakota",
					"Valley City State University": "Valley City State University",
					"Williston State College": "Williston State College",
					"Other": "Other"
				};
				break;
			case "Nebraska":
				newOpts = {
					"": "",
					"Bellevue University": "Bellevue University",
					"Bishop Clarkson College": "Bishop Clarkson College",
					"Central Community College, Grand Island Campus": "Central Community College, G\
rand Island Campus",
					"Central Community College, Hastings": "Central Community College, Hastings",
					"Central Community College, Platte Campus": "Central Community College, Platte \
Campus",
					"Chadron State College": "Chadron State College",
					"College of Saint Mary": "College of Saint Mary",
					"Concordia University": "Concordia University",
					"Creighton University": "Creighton University",
					"Dana College": "Dana College",
					"Doane College": "Doane College",
					"Grace College of The Bible": "Grace College of The Bible",
					"Hastings College": "Hastings College",
					"Lincoln School of Commerce": "Lincoln School of Commerce",
					"McCook Community College": "McCook Community College",
					"Metropolitan Community College": "Metropolitan Community College",
					"Midland Lutheran College": "Midland Lutheran College",
					"Mid-Plains Community College": "Mid-Plains Community College",
					"Nebraska Christian College": "Nebraska Christian College",
					"Nebraska College of Business": "Nebraska College of Business",
					"Nebraska College of Technical Agriculture": "Nebraska College of Technical Agr\
iculture",
					"Nebraska Indian Community College": "Nebraska Indian Community College",
					"Nebraska Methodist College": "Nebraska Methodist College",
					"Nebraska Wesleyan University": "Nebraska Wesleyan University",
					"Northeast Community College": "Northeast Community College",
					"Omaha College of Health Careers": "Omaha College of Health Careers",
					"Peru State College": "Peru State College",
					"Southeast Community College at Beatrice": "Southeast Community College at Beat\
rice",
					"Southeast Community College at Lincoln": "Southeast Community College at Linco\
ln",
					"Southeast Community College at Milford": "Southeast Community College at Milfo\
rd",
					"Union College": "Union College",
					"University of Nebraska at Kearney": "University of Nebraska at Kearney",
					"University of Nebraska at Omaha": "University of Nebraska at Omaha",
					"University of Nebraska Medical Center": "University of Nebraska Medical Center\
",
					"University of Nebraska-Lincoln": "University of Nebraska-Lincoln",
					"Wayne State College": "Wayne State College",
					"Western Nebraska College": "Western Nebraska College",
					"Western Nebraska Community College": "Western Nebraska Community College",
					"York College": "York College",
					"Other": "Other"
				};
				break;
			case "New Hampshire":
				newOpts = {
					"": "",
					"Castle Junior College": "Castle Junior College",
					"Colby-Sawyer College": "Colby-Sawyer College",
					"College for Lifelong Learning": "College for Lifelong Learning",
					"Daniel Webster College": "Daniel Webster College",
					"Dartmouth College": "Dartmouth College",
					"Franklin Pierce College": "Franklin Pierce College",
					"Granite State College": "Granite State College",
					"Great Bay Community College": "Great Bay Community College",
					"Hawthorne College": "Hawthorne College",
					"Hesser College": "Hesser College",
					"Keene State College": "Keene State College",
					"Lakes Region Community College": "Lakes Region Community College",
					"Magdalen College": "Magdalen College",
					"McIntosh College": "McIntosh College",
					"Nashua Community College": "Nashua Community College",
					"New England College": "New England College",
					"New Hampshire Vocational-Technical College": "New Hampshire Vocational-Technic\
al College",
					"New Hampshire Vocational-Technical College": "New Hampshire Vocational-Technic\
al College",
					"Nhti Concords Community College": "Nhti Concords Community College",
					"Notre Dame College": "Notre Dame College",
					"Plymouth State College": "Plymouth State College",
					"River Valley Community College": "River Valley Community College",
					"Rivier College": "Rivier College",
					"Sch of Lifelong Learning, Univ of New Hampshire": "Sch of Lifelong Learning, U\
niv of New Hampshire",
					"Southern New Hampshire University": "Southern New Hampshire University",
					"St Anselm College": "St Anselm College",
					"Thomas More Inst L A": "Thomas More Inst L A",
					"Univ of New Hampshire": "Univ of New Hampshire",
					"University of New Hampshire": "University of New Hampshire",
					"White Mountains Community College": "White Mountains Community College",
					"White Pines College": "White Pines College",
					"Other": "Other"
				};
				break;
			case "New Jersey":
				newOpts = {
					"": "",
					"Assumpton College for Sisters": "Assumpton College for Sisters",
					"Atlantic Cape Community College": "Atlantic Cape Community College",
					"Atlantic Community College": "Atlantic Community College",
					"Bergen Community College": "Bergen Community College",
					"Berkeley College": "Berkeley College",
					"Berkeley College": "Berkeley College",
					"Bloomfield College": "Bloomfield College",
					"Brookdale Community College": "Brookdale Community College",
					"Burlington County College": "Burlington County College",
					"Caldwell College": "Caldwell College",
					"Camden County College": "Camden County College",
					"Centenary College": "Centenary College",
					"College of St Elizabeth": "College of St Elizabeth",
					"County College of Morris": "County College of Morris",
					"Cumberland County College": "Cumberland County College",
					"Devry Technical Institute": "Devry Technical Institute",
					"Don Bosco College": "Don Bosco College",
					"Drew University": "Drew University",
					"Englewood Cliffs College": "Englewood Cliffs College",
					"Essex County College": "Essex County College",
					"Fairleigh Dickinson Univ, Edward Williams College": "Fairleigh Dickinson Univ,\
 Edward Williams College",
					"Fairleigh Dickinson University": "Fairleigh Dickinson University",
					"Fairleigh Dickinson University, Florham Madison": "Fairleigh Dickinson Univers\
ity, Florham Madison",
					"Fairleigh Dickinson University, Rutherford": "Fairleigh Dickinson University, \
Rutherford",
					"Fairleigh Dickinson University, Teaneck": "Fairleigh Dickinson University, Tea\
neck",
					"Felician College": "Felician College",
					"Georgian Court College": "Georgian Court College",
					"Glassboro State College": "Glassboro State College",
					"Gloucester County College": "Gloucester County College",
					"Hudson County Community College": "Hudson County Community College",
					"Immaculate Conception Seminary": "Immaculate Conception Seminary",
					"Joe Kubert School of Cartoon and Graphic Art, Inc": "Joe Kubert School of Cart\
oon and Graphic Art, Inc",
					"Kean University": "Kean University",
					"Mercer County Community College": "Mercer County Community College",
					"Middlesex County College": "Middlesex County College",
					"Monmouth College": "Monmouth College",
					"Montclair State University": "Montclair State University",
					"New Brunswick Theological Seminary": "New Brunswick Theological Seminary",
					"New Jersey City University": "New Jersey City University",
					"New Jersey Institute of Technology": "New Jersey Institute of Technology",
					"Northeastern Bible College": "Northeastern Bible College",
					"Ocean County College": "Ocean County College",
					"Passaic County Community College": "Passaic County Community College",
					"Princeton Theological Seminary": "Princeton Theological Seminary",
					"Princeton University": "Princeton University",
					"Ramapo College of New Jersey": "Ramapo College of New Jersey",
					"Raritan Valley Community College": "Raritan Valley Community College",
					"Rider College": "Rider College",
					"Rowan University": "Rowan University",
					"Rutgers University, Camden Campus": "Rutgers University, Camden Campus",
					"Rutgers University, New Brunswick Campus": "Rutgers University, New Brunswick \
Campus",
					"Rutgers University, Newark Campus": "Rutgers University, Newark Campus",
					"Salem Community College": "Salem Community College",
					"Seton Hall University": "Seton Hall University",
					"Seton Hall University, Newark": "Seton Hall University, Newark",
					"Shelton Coll": "Shelton Coll",
					"Somerset County Technical Inst": "Somerset County Technical Inst",
					"St Peters College": "St Peters College",
					"St Peter's College": "St Peter's College",
					"State University of New Jersey, Rutgers University": "State University of New \
Jersey, Rutgers University",
					"Stevens Institute of Technology": "Stevens Institute of Technology",
					"Stockton State College": "Stockton State College",
					"Stockton University": "Stockton University",
					"Strayer University": "Strayer University",
					"Sussex County Community College": "Sussex County Community College",
					"Sussex County Community College Commission": "Sussex County Community College \
Commission",
					"The College of New Jersey": "The College of New Jersey",
					"The Rabbinical College of America": "The Rabbinical College of America",
					"Thomas A Edison State College": "Thomas A Edison State College",
					"Thomas Edison State College": "Thomas Edison State College",
					"Trenton State College": "Trenton State College",
					"Union County College": "Union County College",
					"University of Medicine and Dentistry of New Jersey": "University of Medicine a\
nd Dentistry of New Jersey",
					"Upsala College": "Upsala College",
					"Warren County Community College Commission": "Warren County Community College \
Commission",
					"Westminster Choir College": "Westminster Choir College",
					"William Paterson College": "William Paterson College",
					"Other": "Other"
				};
				break;
			case "New Mexico":
				newOpts = {
					"": "",
					"Central New Mexico Community College": "Central New Mexico Community College",
					"Clovis Community College": "Clovis Community College",
					"College of Santa Fe": "College of Santa Fe",
					"College of The Southwest": "College of The Southwest",
					"Eastern New Mexico University": "Eastern New Mexico University",
					"Eastern New Mexico University Roswell Campus": "Eastern New Mexico University \
Roswell Campus",
					"Institute of American Indian Arts": "Institute of American Indian Arts",
					"ITT Technical Institute": "ITT Technical Institute",
					"Luna Community College": "Luna Community College",
					"Mesalands Community College": "Mesalands Community College",
					"National American University": "National American University",
					"New Mexico Highlands University": "New Mexico Highlands University",
					"New Mexico Institute of Mining and Technology": "New Mexico Institute of Minin\
g and Technology",
					"New Mexico Junior College": "New Mexico Junior College",
					"New Mexico Military Institute": "New Mexico Military Institute",
					"New Mexico State University": "New Mexico State University",
					"New Mexico State University Alamogordo Branch": "New Mexico State University A\
lamogordo Branch",
					"New Mexico State University Carlsbad Branch": "New Mexico State University Car\
lsbad Branch",
					"New Mexico State University Dona Ana Branch CC": "New Mexico State University \
Dona Ana Branch CC",
					"New Mexico State University Grants Branch": "New Mexico State University Grant\
s Branch",
					"Northern New Mexico College": "Northern New Mexico College",
					"Parks College": "Parks College",
					"Saint John's College": "Saint John's College",
					"San Juan College": "San Juan College",
					"Santa Fe Community College": "Santa Fe Community College",
					"Southwestern Indian Polytechnic Institute": "Southwestern Indian Polytechnic I\
nstitute",
					"The Art Center Design College": "The Art Center Design College",
					"University of Albuquerque": "University of Albuquerque",
					"University of New Mexico": "University of New Mexico",
					"University of New Mexico Gallup Branch": "University of New Mexico Gallup Bran\
ch",
					"University of New Mexico Los Alamos Branch": "University of New Mexico Los Ala\
mos Branch",
					"University of New Mexico Valencia County Branch": "University of New Mexico Va\
lencia County Branch",
					"Western New Mexico University": "Western New Mexico University",
					"Other": "Other"
				};
				break;
			case "Nevada":
				newOpts = {
					"": "",
					"College of Southern Nevada": "College of Southern Nevada",
					"Deep Springs College": "Deep Springs College",
					"Great Basin College": "Great Basin College",
					"Morrison College": "Morrison College",
					"Nevada State College": "Nevada State College",
					"Reno Business College": "Reno Business College",
					"Sierra Nevada College": "Sierra Nevada College",
					"Truckee Meadows Community College": "Truckee Meadows Community College",
					"University of Nevada, Las Vegas": "University of Nevada, Las Vegas",
					"University of Nevada, Reno": "University of Nevada, Reno",
					"Western Nevada Community College": "Western Nevada Community College",
					"Other": "Other"
				};
				break;
			case "New York":
				newOpts = {
					"": "",
					"Adelphi University": "Adelphi University",
					"Adirondack Community College": "Adirondack Community College",
					"Adlai E Stevenson High School": "Adlai E Stevenson High School",
					"Albany Business College": "Albany Business College",
					"Albany College of Pharmacy": "Albany College of Pharmacy",
					"Albany Law School": "Albany Law School",
					"Albany Medical College of Union University": "Albany Medical College of Union \
University",
					"Alfred University": "Alfred University",
					"American Academy McAllister Institute": "American Academy McAllister Institute\
",
					"American Academy of Dramatic Arts": "American Academy of Dramatic Arts",
					"American Univ Cairo": "American Univ Cairo",
					"American University of Beirut": "American University of Beirut",
					"Bank Street College of Education": "Bank Street College of Education",
					"Bard College": "Bard College",
					"Bar-Ilan Univ Israel": "Bar-Ilan Univ Israel",
					"Barnard College": "Barnard College",
					"Berkeley School of Nassau, Inc.": "Berkeley School of Nassau, Inc.",
					"Berkeley School of New York City, Inc.": "Berkeley School of New York City, In\
c.",
					"Boricua College": "Boricua College",
					"Bramson Ort Technical Institute": "Bramson Ort Technical Institute",
					"Briarcliffe School, Inc.": "Briarcliffe School, Inc.",
					"Brooklyn Law School": "Brooklyn Law School",
					"Broome Community College": "Broome Community College",
					"Bryant & Stratton Business Institute of Rochester": "Bryant & Stratton Busines\
s Institute of Rochester",
					"Bryant and Stratton Business Institute of Buffalo": "Bryant and Stratton Busin\
ess Institute of Buffalo",
					"Bryant and Stratton Business Institute of Syracuse": "Bryant and Stratton Busi\
ness Institute of Syracuse",
					"Buffalo Suburban Campus": "Buffalo Suburban Campus",
					"Canisius College": "Canisius College",
					"Cathedral College of The Immaculate Conception": "Cathedral College of The Imm\
aculate Conception",
					"Catholic Medical Ctr of Brooklyn, Inc. Sch Nursing": "Catholic Medical Ctr of \
Brooklyn, Inc. Sch Nursing",
					"Cayuga Community College": "Cayuga Community College",
					"Cazenovia College": "Cazenovia College",
					"Central City Business Institute": "Central City Business Institute",
					"Christ The King Seminary": "Christ The King Seminary",
					"City Univ of New York, Bernard M Baruch College": "City Univ of New York, Bern\
ard M Baruch College",
					"City Univ of New York, Borough of Manhattan CC": "City Univ of New York, Borou\
gh of Manhattan CC",
					"City Univ of New York, College of Staten Island": "City Univ of New York, Coll\
ege of Staten Island",
					"City Univ of New York, Graduate Sch & Univ Center": "City Univ of New York, Gr\
aduate Sch & Univ Center",
					"City Univ of New York, Herbert H Lehman College": "City Univ of New York, Herb\
ert H Lehman College",
					"City Univ of New York, Mount Sinai Sch of Medicine": "City Univ of New York, M\
ount Sinai Sch of Medicine",
					"City Univ of New York, New York City Tech Coll": "City Univ of New York, New Y\
ork City Tech Coll",
					"City Univ of NY, John Jay Coll of Criminal Justice": "City Univ of NY, John Ja\
y Coll of Criminal Justice",
					"City University of New York": "City University of New York",
					"City University of New York, Bronx CC": "City University of New York, Bronx CC\
",
					"City University of New York, Brooklyn College": "City University of New York, \
Brooklyn College",
					"City University of New York, City College": "City University of New York, City\
 College",
					"City University of New York, Hostos CC": "City University of New York, Hostos \
CC",
					"City University of New York, Hunter College": "City University of New York, Hu\
nter College",
					"City University of New York, Kingsborough CC": "City University of New York, K\
ingsborough CC",
					"City University of New York, La Guardia CC": "City University of New York, La \
Guardia CC",
					"City University of New York, Medger Evers College": "City University of New Yo\
rk, Medger Evers College",
					"City University of New York, Queens College": "City University of New York, Qu\
eens College",
					"City University of New York, Queensborough CC": "City University of New York, \
Queensborough CC",
					"City University of New York, York College": "City University of New York, York\
 College",
					"Clarkson University": "Clarkson University",
					"Clinton Community College": "Clinton Community College",
					"Cochran School of Nursing": "Cochran School of Nursing",
					"Colgate Rochester-Bexley-Crozer Divinity School": "Colgate Rochester-Bexley-Cr\
ozer Divinity School",
					"Colgate University": "Colgate University",
					"College for Human Services": "College for Human Services",
					"College of Insurance": "College of Insurance",
					"College of MT. St Vincent": "College of MT. St Vincent",
					"College of New Rochelle": "College of New Rochelle",
					"College of St Rose": "College of St Rose",
					"College of Staten Island": "College of Staten Island",
					"College of The Holy Names": "College of The Holy Names",
					"College of Westchester": "College of Westchester",
					"Columbia University": "Columbia University",
					"Columbia University Colummbia C": "Columbia University Colummbia C",
					"Columbia University Dental Hygiene": "Columbia University Dental Hygiene",
					"Columbia University School of Engineering": "Columbia University School of Eng\
ineering",
					"Columbia University School of Nursing": "Columbia University School of Nursing\
",
					"Columbia-Greene Community College": "Columbia-Greene Community College",
					"Community College of The Finger Lakes": "Community College of The Finger Lakes\
",
					"Concordia College": "Concordia College",
					"Cooper Union": "Cooper Union",
					"Cope Institute": "Cope Institute",
					"Cornell University": "Cornell University",
					"Corning Community College": "Corning Community College",
					"Culinary Institute of America": "Culinary Institute of America",
					"Daemen College": "Daemen College",
					"Dominican College of Blauvelt": "Dominican College of Blauvelt",
					"Dowling College": "Dowling College",
					"Dutchess Community College": "Dutchess Community College",
					"D'Youville College": "D'Youville College",
					"Eastman Sch of Music": "Eastman Sch of Music",
					"Edna McConnell Clark School of Nursing": "Edna McConnell Clark School of Nursi\
ng",
					"Elizabeth Seton College": "Elizabeth Seton College",
					"Elmira College": "Elmira College",
					"Erie Community College": "Erie Community College",
					"Erie Community College City Campus": "Erie Community College City Campus",
					"Erie Community College South Campus": "Erie Community College South Campus",
					"Eugene Lang College": "Eugene Lang College",
					"Excelsior College": "Excelsior College",
					"Farmingdale State University of New York": "Farmingdale State University of Ne\
w York",
					"Finger Lakes Community College": "Finger Lakes Community College",
					"Five Towns College": "Five Towns College",
					"Fordham Univ, Fordham College of Liberal Arts": "Fordham Univ, Fordham College\
 of Liberal Arts",
					"Fordham University": "Fordham University",
					"Franklin College of Switzerland": "Franklin College of Switzerland",
					"Friends World College": "Friends World College",
					"Fulton-Montgomery Community College": "Fulton-Montgomery Community College",
					"General Theological Seminary": "General Theological Seminary",
					"Genesee Community College": "Genesee Community College",
					"Graduate School of Political Management": "Graduate School of Political Manage\
ment",
					"Hamilton College": "Hamilton College",
					"Harlem Hospital Center Physician Asst Prog": "Harlem Hospital Center Physician\
 Asst Prog",
					"Hartwick College": "Hartwick College",
					"Hebrew Union College-Jewish Institute of Religion": "Hebrew Union College-Jewi\
sh Institute of Religion",
					"Hebrew Univ Us Stds": "Hebrew Univ Us Stds",
					"Helene Fuld School of Nursing": "Helene Fuld School of Nursing",
					"Herbert H Lehman College": "Herbert H Lehman College",
					"Herkimer County Community College": "Herkimer County Community College",
					"Hilbert College": "Hilbert College",
					"Hobart and William Smith Colleges": "Hobart and William Smith Colleges",
					"Hofstra University": "Hofstra University",
					"Holy Trinity Orthodox Seminary": "Holy Trinity Orthodox Seminary",
					"Houghton College": "Houghton College",
					"Hudson Valley Community College": "Hudson Valley Community College",
					"Institute of Design and Construction": "Institute of Design and Construction",
					"Interboro Institute": "Interboro Institute",
					"Interfaith Medical Center School of Nursing": "Interfaith Medical Center Schoo\
l of Nursing",
					"Iona College": "Iona College",
					"Ithaca College": "Ithaca College",
					"Itri Torah Resrch in": "Itri Torah Resrch in",
					"Jamestown Business College": "Jamestown Business College",
					"Jamestown Community College": "Jamestown Community College",
					"Jamestown Community College": "Jamestown Community College",
					"Jefferson Community College": "Jefferson Community College",
					"Jewish Theological Seminary of America": "Jewish Theological Seminary of Ameri\
ca",
					"Julliard School": "Julliard School",
					"Katharine Gibbs School": "Katharine Gibbs School",
					"Keuka College": "Keuka College",
					"Kings College": "Kings College",
					"Ladycliff College": "Ladycliff College",
					"Lemoyne College": "Lemoyne College",
					"LIM College": "LIM College",
					"Long Island College Hospital School of Nursing": "Long Island College Hospital\
 School of Nursing",
					"Long Island Univ Schwartz Coll Pharm & Hlth Sci": "Long Island Univ Schwartz C\
oll Pharm & Hlth Sci",
					"Long Island University, Brentwood Campus": "Long Island University, Brentwood \
Campus",
					"Long Island University, Brooklyn Campus": "Long Island University, Brooklyn Ca\
mpus",
					"Long Island University, C. W. Post Campus": "Long Island University, C. W. Pos\
t Campus",
					"Long Island University, Rockland Campus": "Long Island University, Rockland Ca\
mpus",
					"Long Island University, Westchester Campus": "Long Island University, Westches\
ter Campus",
					"Manhattan College": "Manhattan College",
					"Manhattan School of Music": "Manhattan School of Music",
					"Manhattanville College": "Manhattanville College",
					"Mannes College of Music": "Mannes College of Music",
					"Maria College": "Maria College",
					"Maria Regina College": "Maria Regina College",
					"Marist College": "Marist College",
					"Maryknoll School of Theology": "Maryknoll School of Theology",
					"Marymount College": "Marymount College",
					"Marymount Manhattan College": "Marymount Manhattan College",
					"Mater Dei College": "Mater Dei College",
					"Medaille College": "Medaille College",
					"Memorial Hosp SC Rad": "Memorial Hosp SC Rad",
					"Mercy College": "Mercy College",
					"Michlalah College": "Michlalah College",
					"Mohawk Valley Community College": "Mohawk Valley Community College",
					"Molloy College": "Molloy College",
					"Monroe Business Institute - New Rochester": "Monroe Business Institute - New R\
ochester",
					"Monroe College": "Monroe College",
					"Monroe Community College": "Monroe Community College",
					"Mount St Mary College": "Mount St Mary College",
					"Nassau Community College": "Nassau Community College",
					"Nazareth College of Rochester": "Nazareth College of Rochester",
					"New School University": "New School University",
					"New York City Technical College": "New York City Technical College",
					"New York Institute of Technology": "New York Institute of Technology",
					"New York Medical College": "New York Medical College",
					"New York University": "New York University",
					"Niagara County Community College": "Niagara County Community College",
					"Niagara University": "Niagara University",
					"North Country Community College": "North Country Community College",
					"Nyack College": "Nyack College",
					"Olean Business Institute": "Olean Business Institute",
					"Onondaga Community College": "Onondaga Community College",
					"Orange County Community College": "Orange County Community College",
					"Our Lady of Hope Mission Seminary": "Our Lady of Hope Mission Seminary",
					"Pace University": "Pace University",
					"Pace University at Pleasantville/Briarcliff": "Pace University at Pleasantvill\
e/Briarcliff",
					"Paul Smith's College of Arts and Science": "Paul Smith's College of Arts and S\
cience",
					"Polytechnic University": "Polytechnic University",
					"Polytechnic University": "Polytechnic University",
					"Practical Bible Training School": "Practical Bible Training School",
					"Pratt Institute": "Pratt Institute",
					"Rabbinical Seminary of America": "Rabbinical Seminary of America",
					"Rensselaer Polytechnic Institute": "Rensselaer Polytechnic Institute",
					"Roberts Wesleyan College": "Roberts Wesleyan College",
					"Rochester Business Institute": "Rochester Business Institute",
					"Rochester Institute of Technology": "Rochester Institute of Technology",
					"Rockland Community College": "Rockland Community College",
					"Rogers College": "Rogers College",
					"Russell Sage College": "Russell Sage College",
					"Russell Sage College, Junior College of Albany": "Russell Sage College, Junior\
 College of Albany",
					"Russell Sage College, Junior College of Albany": "Russell Sage College, Junior\
 College of Albany",
					"Saint Bonaventure University": "Saint Bonaventure University",
					"Saint John Fisher College": "Saint John Fisher College",
					"Samaritan Hosp Nrsng": "Samaritan Hosp Nrsng",
					"Sarah Lawrence College": "Sarah Lawrence College",
					"Schenectady County Community College": "Schenectady County Community College",
					"School of Visual Arts": "School of Visual Arts",
					"Seminary of The Immaculate Conception": "Seminary of The Immaculate Conception\
",
					"Siena College": "Siena College",
					"Skidmore College": "Skidmore College",
					"St Bonaventure University": "St Bonaventure University",
					"St Francis College": "St Francis College",
					"St John Fisher College": "St John Fisher College",
					"St Johns University": "St Johns University",
					"St Johns University, Staten Island Campus": "St Johns University, Staten Islan\
d Campus",
					"St Josephs College - Suffolk Branch, Patchogue": "St Josephs College - Suffolk\
 Branch, Patchogue",
					"St Josephs College, Brooklyn": "St Josephs College, Brooklyn",
					"St Lawrence University": "St Lawrence University",
					"St Thomas Aquinas College": "St Thomas Aquinas College",
					"State Univ of New York, Coll of Tech at Alfred": "State Univ of New York, Coll\
 of Tech at Alfred",
					"State Univ of New York, Coll of Tech at Canton": "State Univ of New York, Coll\
 of Tech at Canton",
					"State Univ of New York, Coll of Tech at Delhi": "State Univ of New York, Coll \
of Tech at Delhi",
					"State Univ of New York, Coll of Tech Farmingdale": "State Univ of New York, Co\
ll of Tech Farmingdale",
					"State Univ of New York, College at Brockport": "State Univ of New York, Colleg\
e at Brockport",
					"State Univ of New York, College at Cortland": "State Univ of New York, College\
 at Cortland",
					"State Univ of New York, College at Geneseo": "State Univ of New York, College \
at Geneseo",
					"State Univ of New York, College at Geneseo": "State Univ of New York, College \
at Geneseo",
					"State Univ of New York, College at New Paltz": "State Univ of New York, Colleg\
e at New Paltz",
					"State Univ of New York, College at Old Westbury": "State Univ of New York, Col\
lege at Old Westbury",
					"State Univ of New York, College at Oneonta": "State Univ of New York, College \
at Oneonta",
					"State Univ of New York, College at Oswego": "State Univ of New York, College a\
t Oswego",
					"State Univ of New York, College at Plattsburgh": "State Univ of New York, Coll\
ege at Plattsburgh",
					"State Univ of New York, College at Potsdam": "State Univ of New York, College \
at Potsdam",
					"State Univ of New York, College at Purchase": "State Univ of New York, College\
 at Purchase",
					"State Univ of New York, College of Fredonia": "State Univ of New York, College\
 of Fredonia",
					"State Univ of New York, Empire State College": "State Univ of New York, Empire\
 State College",
					"State Univ of New York, Fashion Inst of Technology": "State Univ of New York, \
Fashion Inst of Technology",
					"State Univ of New York, Health Sci Ctr at Brooklyn": "State Univ of New York, \
Health Sci Ctr at Brooklyn",
					"State Univ of New York, Health Sci Ctr at Syracuse": "State Univ of New York, \
Health Sci Ctr at Syracuse",
					"State Univ of New York, Inst of Tech at Utica/Rome": "State Univ of New York, \
Inst of Tech at Utica/Rome",
					"State Univ of New York, Purchase College": "State Univ of New York, Purchase C\
ollege",
					"State Univ of New York, State Univ at Albany": "State Univ of New York, State \
Univ at Albany",
					"State Univ of New York, State Univ at Binghamton": "State Univ of New York, St\
ate Univ at Binghamton",
					"State Univ of New York, State Univ at Buffalo": "State Univ of New York, State\
 Univ at Buffalo",
					"State Univ of New York, State Univ at Stony Brook": "State Univ of New York, S\
tate Univ at Stony Brook",
					"State Univ of New York, Univ at Buffalo": "State Univ of New York, Univ at Buf\
falo",
					"State Univ of NY, Coll of Ag & Tech at Cobleskill": "State Univ of NY, Coll of\
 Ag & Tech at Cobleskill",
					"State Univ of NY, Coll of Ag & Tech at Morrisville": "State Univ of NY, Coll o\
f Ag & Tech at Morrisville",
					"State Univ of NY, Coll of Ceramics at Alfred Univ": "State Univ of NY, Coll of\
 Ceramics at Alfred Univ",
					"State Univ of NY, Coll of Env Sci & Forestry": "State Univ of NY, Coll of Env \
Sci & Forestry",
					"State Univ of NY, Maritime Coll at Fort Schuyler": "State Univ of NY, Maritime\
 Coll at Fort Schuyler",
					"Suffolk County Community College - Eastern Campus": "Suffolk County Community \
College - Eastern Campus",
					"Suffolk County Community College - Western Campus": "Suffolk County Community \
College - Western Campus",
					"Suffolk County Community College Ammer": "Suffolk County Community College Amm\
er",
					"Sullivan County Community College, Loch Sheldrake": "Sullivan County Community\
 College, Loch Sheldrake",
					"Syracuse University": "Syracuse University",
					"Technical Career Institutes": "Technical Career Institutes",
					"Tel Aviv University": "Tel Aviv University",
					"The Sage Colleges": "The Sage Colleges",
					"Tobe-Coburn School for Fashion Careers": "Tobe-Coburn School for Fashion Caree\
rs",
					"Tompkins-Cortland Community College": "Tompkins-Cortland Community College",
					"Touro College": "Touro College",
					"Traphagen School of Fashion": "Traphagen School of Fashion",
					"Trocaire College": "Trocaire College",
					"Ulster County Community College": "Ulster County Community College",
					"Union College": "Union College",
					"United States Merchant Marine Academy": "United States Merchant Marine Academy\
",
					"United States Military Academy": "United States Military Academy",
					"University College of Pace University": "University College of Pace University\
",
					"University Maryland Munich": "University Maryland Munich",
					"University of Rochester": "University of Rochester",
					"Utica College": "Utica College",
					"Vassar College": "Vassar College",
					"Vaughn College of Aeronautics & Technology": "Vaughn College of Aeronautics & \
Technology",
					"Villa Maria College of Buffalo": "Villa Maria College of Buffalo",
					"Wadhams Hall": "Wadhams Hall",
					"Wagner College": "Wagner College",
					"Webb Institute of Naval Architecture": "Webb Institute of Naval Architecture",
					"Wells College": "Wells College",
					"Westchester Community College": "Westchester Community College",
					"William Smith College": "William Smith College",
					"Wood School": "Wood School",
					"Yeshiva University, New York City": "Yeshiva University, New York City",
					"Other": "Other"
				};
				break;
			case "Ohio":
				newOpts = {
					"": "",
					"Air Force Institute of Technology": "Air Force Institute of Technology",
					"Antioch University": "Antioch University",
					"Art Academy of Cincinnati": "Art Academy of Cincinnati",
					"Ashland University": "Ashland University",
					"Baldwin-Wallace College": "Baldwin-Wallace College",
					"Belmont Technical College": "Belmont Technical College",
					"Bliss College": "Bliss College",
					"Bluffton College": "Bluffton College",
					"Borromeo College of Ohio": "Borromeo College of Ohio",
					"Bowling Green State University": "Bowling Green State University",
					"Bowling Green State University - Firelands": "Bowling Green State University -\
 Firelands",
					"Capital University": "Capital University",
					"Case Western Reserve University-Generic": "Case Western Reserve University-Gen\
eric",
					"Cedarville College": "Cedarville College",
					"Central Ohio Technical College": "Central Ohio Technical College",
					"Central State University": "Central State University",
					"Chatfield College": "Chatfield College",
					"Cincinnati Christian University": "Cincinnati Christian University",
					"Cincinnati Technical College": "Cincinnati Technical College",
					"Circleville Bible College": "Circleville Bible College",
					"Clark State Community College": "Clark State Community College",
					"Cleveland Institute of Art": "Cleveland Institute of Art",
					"Cleveland Institute of Music": "Cleveland Institute of Music",
					"Cleveland State University": "Cleveland State University",
					"College of Mount St Joseph": "College of Mount St Joseph",
					"College of Wooster": "College of Wooster",
					"Columbus College of Art and Design": "Columbus College of Art and Design",
					"Columbus State Community College": "Columbus State Community College",
					"Cuyahoga Community College, Eastern Campus": "Cuyahoga Community College, East\
ern Campus",
					"Cuyahoga Community College, Metropolitan Campus": "Cuyahoga Community College,\
 Metropolitan Campus",
					"Cuyahoga Community College, Western Campus": "Cuyahoga Community College, West\
ern Campus",
					"David N Myers College": "David N Myers College",
					"Davis College": "Davis College",
					"Denison University": "Denison University",
					"Devry Institute of Technology": "Devry Institute of Technology",
					"Devry Institute of Technology OH": "Devry Institute of Technology OH",
					"Eastern Gateway Community College": "Eastern Gateway Community College",
					"Edison State Community College": "Edison State Community College",
					"Franciscan University of Steubenville": "Franciscan University of Steubenville\
",
					"Franklin University": "Franklin University",
					"Gods Bible School and College": "Gods Bible School and College",
					"Heidelberg College": "Heidelberg College",
					"Hiram College": "Hiram College",
					"Hocking Technical College": "Hocking Technical College",
					"James A Rhodes State College": "James A Rhodes State College",
					"John Carroll University": "John Carroll University",
					"Kent State University": "Kent State University",
					"Kenyon College": "Kenyon College",
					"Kettering College of Medical Arts": "Kettering College of Medical Arts",
					"Lake Erie College": "Lake Erie College",
					"Lakeland Community College": "Lakeland Community College",
					"Lorain County Community College": "Lorain County Community College",
					"Lourdes College": "Lourdes College",
					"Malone College": "Malone College",
					"Marietta College": "Marietta College",
					"Marion Technical College": "Marion Technical College",
					"Medical College of Ohio": "Medical College of Ohio",
					"Miami University": "Miami University",
					"Miami University Regional Campuses, Hamilton": "Miami University Regional Camp\
uses, Hamilton",
					"Miami University Regional Campuses, Middletown": "Miami University Regional Ca\
mpuses, Middletown",
					"Miami-Jacobs Junior Business College": "Miami-Jacobs Junior Business College",
					"Mount Union College": "Mount Union College",
					"Mount Vernon Nazarene College": "Mount Vernon Nazarene College",
					"Muskingum Area Technical College": "Muskingum Area Technical College",
					"Muskingum College": "Muskingum College",
					"Newark Technical College": "Newark Technical College",
					"North Central Technical College": "North Central Technical College",
					"Northwest State Community College": "Northwest State Community College",
					"Notre Dame College Ohio": "Notre Dame College Ohio",
					"Oberlin College": "Oberlin College",
					"Ohio College of Podiatric Medicine": "Ohio College of Podiatric Medicine",
					"Ohio Dominican College": "Ohio Dominican College",
					"Ohio Northern University": "Ohio Northern University",
					"Ohio State Univ Agricultural Technical Institute": "Ohio State Univ Agricultur\
al Technical Institute",
					"Ohio State University": "Ohio State University",
					"Ohio University": "Ohio University",
					"Ohio Wesleyan University": "Ohio Wesleyan University",
					"Otterbein College": "Otterbein College",
					"Owens Community College": "Owens Community College",
					"Pontifical College Josephinum": "Pontifical College Josephinum",
					"Rabbinical College of Telshe": "Rabbinical College of Telshe",
					"Raymond Walters College, University of Cincinnati": "Raymond Walters College, \
University of Cincinnati",
					"Shawnee State University": "Shawnee State University",
					"Sinclair Community College": "Sinclair Community College",
					"Southern Ohio College": "Southern Ohio College",
					"Southern State Community College": "Southern State Community College",
					"Stark Technical College": "Stark Technical College",
					"Terra Community College": "Terra Community College",
					"The Defiance College": "The Defiance College",
					"The Union Institute": "The Union Institute",
					"The University of Findlay": "The University of Findlay",
					"Tiffin University": "Tiffin University",
					"Trumbull Memorial Hosp": "Trumbull Memorial Hosp",
					"Univ of Northwestern Ohio": "Univ of Northwestern Ohio",
					"University of Akron": "University of Akron",
					"University of Cincinnati": "University of Cincinnati",
					"University of Dayton": "University of Dayton",
					"University of Rio Grande": "University of Rio Grande",
					"University of Toledo": "University of Toledo",
					"Urbana University": "Urbana University",
					"Ursuline College": "Ursuline College",
					"Walsh College": "Walsh College",
					"Washington State Community College": "Washington State Community College",
					"Wayne General and Technical College": "Wayne General and Technical College",
					"Wilberforce University": "Wilberforce University",
					"Wilmington College": "Wilmington College",
					"Wittenberg University": "Wittenberg University",
					"Wright State University": "Wright State University",
					"Wright State University - Celina": "Wright State University - Celina",
					"Xavier University": "Xavier University",
					"Youngstown State University": "Youngstown State University",
					"Other": "Other"
				};
				break;
			case "Oklahoma":
				newOpts = {
					"": "",
					"Bacone College": "Bacone College",
					"Cameron University": "Cameron University",
					"Carl Albert State College": "Carl Albert State College",
					"Connors State College": "Connors State College",
					"East Central University": "East Central University",
					"Eastern Oklahoma State College": "Eastern Oklahoma State College",
					"El Reno Junior College": "El Reno Junior College",
					"Langston University": "Langston University",
					"Mid-America Christian Univesity": "Mid-America Christian Univesity",
					"Murray State College": "Murray State College",
					"North Oklahoma College": "North Oklahoma College",
					"Northeastern Oklahoma A & M College": "Northeastern Oklahoma A & M College",
					"Northeastern State University": "Northeastern State University",
					"Northern Oklahoma College": "Northern Oklahoma College",
					"Northwestern Oklahoma State University": "Northwestern Oklahoma State Universi\
ty",
					"Oklahoma Baptist University": "Oklahoma Baptist University",
					"Oklahoma Christian University of Science and Arts": "Oklahoma Christian Univer\
sity of Science and Arts",
					"Oklahoma City Community College": "Oklahoma City Community College",
					"Oklahoma City University": "Oklahoma City University",
					"Oklahoma Junior College": "Oklahoma Junior College",
					"Oklahoma Junior College of Business & Technology": "Oklahoma Junior College of\
 Business & Technology",
					"Oklahoma Panhandle State University": "Oklahoma Panhandle State University",
					"Oklahoma State University, Oklahoma City": "Oklahoma State University, Oklahom\
a City",
					"Oklahoma State University, Okmulgee": "Oklahoma State University, Okmulgee",
					"Oklahoma Wesleyan University": "Oklahoma Wesleyan University",
					"Oral Roberts University": "Oral Roberts University",
					"OSU Animal Disease Diagnostic Lab": "OSU Animal Disease Diagnostic Lab",
					"Phillips University": "Phillips University",
					"Redlands Community College": "Redlands Community College",
					"Rogers University": "Rogers University",
					"Rose State College": "Rose State College",
					"Saint Gregorys College": "Saint Gregorys College",
					"Seminole State College": "Seminole State College",
					"Southeastern Oklahoma State University": "Southeastern Oklahoma State Universi\
ty",
					"Southern Nazarene University": "Southern Nazarene University",
					"Southwestern Oklahoma State University": "Southwestern Oklahoma State Universi\
ty",
					"Southwestern Oklahoma State University at Sayre": "Southwestern Oklahoma State\
 University at Sayre",
					"Tulsa Community College": "Tulsa Community College",
					"University of Central Oklahoma": "University of Central Oklahoma",
					"University of Oklahoma": "University of Oklahoma",
					"University of Science and Arts of Oklahoma": "University of Science and Arts o\
f Oklahoma",
					"University of Tulsa": "University of Tulsa",
					"Western Oklahoma State College": "Western Oklahoma State College",
					"Other": "Other"
				};
				break;
			case "Oregon":
				newOpts = {
					"": "",
					"Blue Mountain Community College": "Blue Mountain Community College",
					"Cascade College": "Cascade College",
					"Central Oregon Community College": "Central Oregon Community College",
					"Chemeketa Community College": "Chemeketa Community College",
					"Clackamas Community College": "Clackamas Community College",
					"Clatsop Community College": "Clatsop Community College",
					"Columbia Christian College": "Columbia Christian College",
					"Columbia Gorge Community College": "Columbia Gorge Community College",
					"Concordia University": "Concordia University",
					"Devry University": "Devry University",
					"Division of Continuing Education": "Division of Continuing Education",
					"Eastern Oregon University": "Eastern Oregon University",
					"Ecola Bible School": "Ecola Bible School",
					"Eugene Bible College": "Eugene Bible College",
					"George Fox University": "George Fox University",
					"Heald College": "Heald College",
					"Judson Baptist College": "Judson Baptist College",
					"Klamath Community College": "Klamath Community College",
					"Lane Community College": "Lane Community College",
					"Lewis and Clark College and Law School": "Lewis and Clark College and Law Scho\
ol",
					"Linfield College": "Linfield College",
					"Linn-Benton Community College": "Linn-Benton Community College",
					"Marylhurst University": "Marylhurst University",
					"Mount Angel Seminary": "Mount Angel Seminary",
					"MT Angel College": "MT Angel College",
					"MT Hood Community College": "MT Hood Community College",
					"Multnomah Bible College & Seminary": "Multnomah Bible College & Seminary",
					"Multnomah College": "Multnomah College",
					"Northwest Christian College": "Northwest Christian College",
					"Oregon Coast Comunity College": "Oregon Coast Comunity College",
					"Oregon College of Art & Craft": "Oregon College of Art & Craft",
					"Oregon Graduate Institute": "Oregon Graduate Institute",
					"Oregon Health Sciences University": "Oregon Health Sciences University",
					"Oregon Institute of Technology": "Oregon Institute of Technology",
					"Oregon Polytechnic Institute": "Oregon Polytechnic Institute",
					"Oregon State University": "Oregon State University",
					"Pacific Northwest College of Art": "Pacific Northwest College of Art",
					"Pacific University": "Pacific University",
					"Portland Community College": "Portland Community College",
					"Portland State University": "Portland State University",
					"Reed College": "Reed College",
					"Rogue Community College": "Rogue Community College",
					"Southern Oregon University": "Southern Oregon University",
					"Southwestern Oregon Community College": "Southwestern Oregon Community College\
",
					"The Art Institute of Portland": "The Art Institute of Portland",
					"Tillamook Bay Community College": "Tillamook Bay Community College",
					"Treasure Valley Community College": "Treasure Valley Community College",
					"Umpqua Community College": "Umpqua Community College",
					"University of Oregon": "University of Oregon",
					"University of Portland": "University of Portland",
					"University of The Nations": "University of The Nations",
					"University of Western States": "University of Western States",
					"Warner Pacific College": "Warner Pacific College",
					"Western Evangelical Seminary": "Western Evangelical Seminary",
					"Western Oregon University": "Western Oregon University",
					"Western Seminary": "Western Seminary",
					"Western States Chiropractic College": "Western States Chiropractic College",
					"Willamette University": "Willamette University",
					"Other": "Other"
				};
				break;
			case "Pennsylvania":
				newOpts = {
					"": "",
					"Academy of The New Church": "Academy of The New Church",
					"Albright College": "Albright College",
					"Allegheny College": "Allegheny College",
					"Alvernia College": "Alvernia College",
					"Arcadia University": "Arcadia University",
					"Art Institute of Philadelphia": "Art Institute of Philadelphia",
					"Art Institute of Pittsburgh": "Art Institute of Pittsburgh",
					"Baptist Bible College of Pennsylvania": "Baptist Bible College of Pennsylvania\
",
					"Biblical Theological Seminary": "Biblical Theological Seminary",
					"Bloomsburg University of Pennsylvania": "Bloomsburg University of Pennsylvania\
",
					"Bryn Athyn College of The New Church": "Bryn Athyn College of The New Church",
					"Bryn Mawr College": "Bryn Mawr College",
					"Bucknell University": "Bucknell University",
					"Bucks County Community College": "Bucks County Community College",
					"Butler County Community College": "Butler County Community College",
					"Cabrini College": "Cabrini College",
					"California University of Pennsylvania": "California University of Pennsylvania\
",
					"Carlow College": "Carlow College",
					"Carnegie Mellon University": "Carnegie Mellon University",
					"Cedar Crest College": "Cedar Crest College",
					"Chatham College": "Chatham College",
					"Chestnut Hill College": "Chestnut Hill College",
					"Cheyney University of Pennsylvania": "Cheyney University of Pennsylvania",
					"Chubb Institute /Keystone": "Chubb Institute /Keystone",
					"Clarion University of Pennsylvania": "Clarion University of Pennsylvania",
					"College Misericordia": "College Misericordia",
					"Combs College of Music": "Combs College of Music",
					"Community College of Alleghany County - North": "Community College of Alleghan\
y County - North",
					"Community College of Allegheny County - Allegheny": "Community College of Alle\
gheny County - Allegheny",
					"Community College of Allegheny County - South": "Community College of Alleghen\
y County - South",
					"Community College of Beaver County": "Community College of Beaver County",
					"Community College of Philadelphia": "Community College of Philadelphia",
					"Conemaugh Valley Mem High School": "Conemaugh Valley Mem High School",
					"Curtis Institute of Music": "Curtis Institute of Music",
					"Delaware County Community College": "Delaware County Community College",
					"Delaware Valley College of Science and Agriculture": "Delaware Valley College \
of Science and Agriculture",
					"DeSales University": "DeSales University",
					"Dickinson College": "Dickinson College",
					"Drexel University": "Drexel University",
					"Duffs Business Institute": "Duffs Business Institute",
					"Duquesne University": "Duquesne University",
					"East Stroudsbrg University of Pennsylvania": "East Stroudsbrg University of Pe\
nnsylvania",
					"Eastern College": "Eastern College",
					"Edinboro University of Pennsylvania": "Edinboro University of Pennsylvania",
					"Education Direct": "Education Direct",
					"Elizabethtown College": "Elizabethtown College",
					"Erie Business Center": "Erie Business Center",
					"Franklin and Marshall College": "Franklin and Marshall College",
					"Gannon University": "Gannon University",
					"Geneva College": "Geneva College",
					"Gettysburg College": "Gettysburg College",
					"Gratz College": "Gratz College",
					"Grove City College": "Grove City College",
					"Gwynedd-Mercy College": "Gwynedd-Mercy College",
					"Hahnemann University": "Hahnemann University",
					"Harcum Junior College": "Harcum Junior College",
					"Harrisburg Area Community College": "Harrisburg Area Community College",
					"Haverford College": "Haverford College",
					"Holy Family College": "Holy Family College",
					"ICS Center for Degree Studies": "ICS Center for Degree Studies",
					"Immaculata College": "Immaculata College",
					"Indiana University of Pennsylvania": "Indiana University of Pennsylvania",
					"Juniata College": "Juniata College",
					"Keystone Junior College": "Keystone Junior College",
					"Kings College": "Kings College",
					"Kutztown University of Pennsylvania": "Kutztown University of Pennsylvania",
					"Lackawanna Junior College": "Lackawanna Junior College",
					"Lafayette College": "Lafayette College",
					"Lancaster Bible College": "Lancaster Bible College",
					"Laroche College": "Laroche College",
					"Lasalle University": "Lasalle University",
					"Lebanon Valley College": "Lebanon Valley College",
					"Lehigh Carbon Community College": "Lehigh Carbon Community College",
					"Lehigh University": "Lehigh University",
					"Lincoln Tech Institute Philadelphia": "Lincoln Tech Institute Philadelphia",
					"Lincoln Technical Institute": "Lincoln Technical Institute",
					"Lincoln University Commonwealth Pennsylvania": "Lincoln University Commonwealt\
h Pennsylvania",
					"Lock Haven Universty of Pennsylvania": "Lock Haven Universty of Pennsylvania",
					"Luzerne County Community College": "Luzerne County Community College",
					"Lycoming College": "Lycoming College",
					"Manna Bible Institute": "Manna Bible Institute",
					"Manor Junior College": "Manor Junior College",
					"Mansfield University of Pennsylvania": "Mansfield University of Pennsylvania",
					"Marywood College": "Marywood College",
					"Mercyhurst College": "Mercyhurst College",
					"Messiah College": "Messiah College",
					"Millersville University of Pennsylvania": "Millersville University of Pennsylv\
ania",
					"Montgomery County Community College": "Montgomery County Community College",
					"Moore College of Art": "Moore College of Art",
					"Moravian College": "Moravian College",
					"Mount Aloysius Junior College": "Mount Aloysius Junior College",
					"Muhlenberg College": "Muhlenberg College",
					"Neumann College": "Neumann College",
					"New Castle Business School": "New Castle Business School",
					"Northampton County Area Community College": "Northampton County Area Community\
 College",
					"Northeastern Christian Junior College": "Northeastern Christian Junior College\
",
					"Peirce Junior College": "Peirce Junior College",
					"Pennsylvania College of Optometry": "Pennsylvania College of Optometry",
					"Pennsylvania College of Technology": "Pennsylvania College of Technology",
					"Pennsylvania Highlands CC": "Pennsylvania Highlands CC",
					"Pennsylvania Institute of Technology": "Pennsylvania Institute of Technology",
					"Philadelphia College of Bible": "Philadelphia College of Bible",
					"Philadelphia College of Osteopatic Medicine": "Philadelphia College of Osteopa\
tic Medicine",
					"Philadelphia College Pharmacy and Science": "Philadelphia College Pharmacy and\
 Science",
					"Philadelphia University": "Philadelphia University",
					"Pinebrook Junior College": "Pinebrook Junior College",
					"Pittsburgh Technical Institute": "Pittsburgh Technical Institute",
					"Point Park College": "Point Park College",
					"Reading Area Community College": "Reading Area Community College",
					"Robert Morris College Pennsylvania": "Robert Morris College Pennsylvania",
					"Rosemont College": "Rosemont College",
					"School of Hotel & Restaurant Management": "School of Hotel & Restaurant Manage\
ment",
					"Seton Hill College": "Seton Hill College",
					"Shippensburg University of Pennsylvania": "Shippensburg University of Pennsylv\
ania",
					"Slippery Rock University of Pennsylvania": "Slippery Rock University of Pennsy\
lvania",
					"Spring Garden College": "Spring Garden College",
					"St Charles Borromeo Seminary": "St Charles Borromeo Seminary",
					"St Francis University": "St Francis University",
					"St Josephs University": "St Josephs University",
					"St Vincent College": "St Vincent College",
					"St Vincent Seminary": "St Vincent Seminary",
					"Susquehanna University": "Susquehanna University",
					"Swarthmore College": "Swarthmore College",
					"Temple University": "Temple University",
					"The American College": "The American College",
					"The Pennsylvania State University": "The Pennsylvania State University",
					"Thiel College": "Thiel College",
					"Thomas Jefferson University": "Thomas Jefferson University",
					"United States Army War College": "United States Army War College",
					"United Wesleyan College": "United Wesleyan College",
					"University of Pennsylvania": "University of Pennsylvania",
					"University of Pittsburgh": "University of Pittsburgh",
					"University of Sciences in Philadelphia": "University of Sciences in Philadelph\
ia",
					"University of Scranton": "University of Scranton",
					"University of The Arts": "University of The Arts",
					"University Pennsylvania College General Studies": "University Pennsylvania Col\
lege General Studies",
					"University Pennsylvania Dent Medical": "University Pennsylvania Dent Medical",
					"Ursinus College": "Ursinus College",
					"Valley Forge Christian College": "Valley Forge Christian College",
					"Valley Forge Military Junior College": "Valley Forge Military Junior College",
					"Villa Maria College Pennsylvania": "Villa Maria College Pennsylvania",
					"Villa Maria Hous Std": "Villa Maria Hous Std",
					"Villanova University": "Villanova University",
					"Washington and Jefferson College": "Washington and Jefferson College",
					"Waynesburg College": "Waynesburg College",
					"West Chester University of Pennsylvania": "West Chester University of Pennsylv\
ania",
					"Westminster College Pennsylvania": "Westminster College Pennsylvania",
					"Westminster Theological Seminary": "Westminster Theological Seminary",
					"Westmoreland County Community College": "Westmoreland County Community College\
",
					"Widener University": "Widener University",
					"Wilkes University": "Wilkes University",
					"Wilson College": "Wilson College",
					"York College of Pennsylvania": "York College of Pennsylvania",
					"Other": "Other"
				};
				break;
			case "Puerto Rico":
				newOpts = {
					"": "",
					"Bayamon Central University": "Bayamon Central University",
					"Caribbean Univ College": "Caribbean Univ College",
					"Catholic University of Puerto Rico": "Catholic University of Puerto Rico",
					"Centro de Estudios Multidisciplinarios": "Centro de Estudios Multidisciplinari\
os",
					"Colegio Regional De Bayamon": "Colegio Regional De Bayamon",
					"Escuela de Artes Plasticas": "Escuela de Artes Plasticas",
					"Inter American Univ Puerto Rico, Aguadilla Regnl": "Inter American Univ Puerto\
 Rico, Aguadilla Regnl",
					"Inter American Univ Puerto Rico, Arecibo Univ Coll": "Inter American Univ Puer\
to Rico, Arecibo Univ Coll",
					"Inter American Univ Puerto Rico, Barranquitas Reg": "Inter American Univ Puert\
o Rico, Barranquitas Reg",
					"Inter American Univ Puerto Rico, Bayamon Univ Coll": "Inter American Univ Puer\
to Rico, Bayamon Univ Coll",
					"Inter American Univ Puerto Rico, Fajardo Campus": "Inter American Univ Puerto \
Rico, Fajardo Campus",
					"Inter American Univ Puerto Rico, Guayama Campus": "Inter American Univ Puerto \
Rico, Guayama Campus",
					"Inter American Univ Puerto Rico, Metro Campus": "Inter American Univ Puerto Ri\
co, Metro Campus",
					"Inter American Univ Puerto Rico, Ponce Campus": "Inter American Univ Puerto Ri\
co, Ponce Campus",
					"Inter American Univ Puerto Rico, San German": "Inter American Univ Puerto Rico\
, San German",
					"Inter American Univ Puerto Rico, Sch of Optometry": "Inter American Univ Puert\
o Rico, Sch of Optometry",
					"Inter American Univ Puerto Rico, School of Law": "Inter American Univ Puerto R\
ico, School of Law",
					"International Christian University": "International Christian University",
					"Metropolitan University": "Metropolitan University",
					"Polytechnic University, Puerto Rico": "Polytechnic University, Puerto Rico",
					"Puerto Rico Junior College": "Puerto Rico Junior College",
					"Turabo University": "Turabo University",
					"Univ of Puerto Rico, Aguadilla Regional College": "Univ of Puerto Rico, Aguadi\
lla Regional College",
					"Univ of Puerto Rico, Arecibo Tech Univ Coll": "Univ of Puerto Rico, Arecibo Te\
ch Univ Coll",
					"Univ of Puerto Rico, Bayamon Tech Univ Coll": "Univ of Puerto Rico, Bayamon Te\
ch Univ Coll",
					"Univ of Puerto Rico, Carolina Regional College": "Univ of Puerto Rico, Carolin\
a Regional College",
					"Univ of Puerto Rico, Cayey Univ College": "Univ of Puerto Rico, Cayey Univ Col\
lege",
					"Univ of Puerto Rico, Humacao Univ College": "Univ of Puerto Rico, Humacao Univ\
 College",
					"Univ of Puerto Rico, La Montana Regional College": "Univ of Puerto Rico, La Mo\
ntana Regional College",
					"Univ of Puerto Rico, Ponce Technological Univ Coll": "Univ of Puerto Rico, Pon\
ce Technological Univ Coll",
					"Universidad De Puerto Rico En Cayey": "Universidad De Puerto Rico En Cayey",
					"Universidad Del Sagrado Corazon": "Universidad Del Sagrado Corazon",
					"University of Puerto Rico, Mayaguez Campus": "University of Puerto Rico, Mayag\
uez Campus",
					"University of Puerto Rico, Medical Sciences Campus": "University of Puerto Ric\
o, Medical Sciences Campus",
					"University of Puerto Rico, Rio Piedras Campus": "University of Puerto Rico, Ri\
o Piedras Campus",
					"University of The Sacred Heart": "University of The Sacred Heart",
					"Other": "Other"
				};
				break;
			case "Rhode Island":
				newOpts = {
					"": "",
					"Brown University": "Brown University",
					"Bryant College": "Bryant College",
					"Community College of Rhode Island": "Community College of Rhode Island",
					"Johnson & Wales University": "Johnson & Wales University",
					"Katherine Gibbs School": "Katherine Gibbs School",
					"New England Institute of Technology": "New England Institute of Technology",
					"Providence College": "Providence College",
					"Rhode Island College": "Rhode Island College",
					"Rhode Island School of Design": "Rhode Island School of Design",
					"Roger Williams College": "Roger Williams College",
					"Salve Regina - The Newport College": "Salve Regina - The Newport College",
					"United States Naval War College": "United States Naval War College",
					"University of Rhode Island": "University of Rhode Island",
					"Other": "Other"
				};
				break;
			case "South Carolina":
				newOpts = {
					"": "",
					"Aiken Technical College": "Aiken Technical College",
					"Allen University": "Allen University",
					"Anderson College": "Anderson College",
					"Baptist College at Charleston": "Baptist College at Charleston",
					"Beaufort Technical College": "Beaufort Technical College",
					"Benedict College": "Benedict College",
					"Bob Jones University": "Bob Jones University",
					"Central Carolina Technical College": "Central Carolina Technical College",
					"Central Wesleyan College": "Central Wesleyan College",
					"Charleston Southern University": "Charleston Southern University",
					"Chesterfield-Marlboro Technical College": "Chesterfield-Marlboro Technical Col\
lege",
					"Citadel Evening College": "Citadel Evening College",
					"Claflin University": "Claflin University",
					"Clemson University": "Clemson University",
					"Clinton Junior College": "Clinton Junior College",
					"Coastal Carolina University": "Coastal Carolina University",
					"Coker College": "Coker College",
					"College of Charleston": "College of Charleston",
					"Columbia College South Carolina": "Columbia College South Carolina",
					"Columbia Junior College of Business": "Columbia Junior College of Business",
					"Columiba International University": "Columiba International University",
					"Converse College": "Converse College",
					"Denmark Technical College": "Denmark Technical College",
					"Erskine College": "Erskine College",
					"Florence Darlington Technical College": "Florence Darlington Technical College\
",
					"Francis Marion College": "Francis Marion College",
					"Furman University": "Furman University",
					"Greenville Technical College": "Greenville Technical College",
					"Horry-Georgetown Tecnical College Conway": "Horry-Georgetown Tecnical College \
Conway",
					"Lander University": "Lander University",
					"Limestone College": "Limestone College",
					"Medical University of South Carolina": "Medical University of South Carolina",
					"Midlands Technical College - Beltline": "Midlands Technical College - Beltline\
",
					"Morris College": "Morris College",
					"Newberry College": "Newberry College",
					"North Greenville College": "North Greenville College",
					"Northeastern Technical College": "Northeastern Technical College",
					"Orangeburg-Calhoun Technical College": "Orangeburg-Calhoun Technical College",
					"Piedmont Technical College": "Piedmont Technical College",
					"Presbyterian College": "Presbyterian College",
					"South Carolina State University": "South Carolina State University",
					"Southern Methodist College": "Southern Methodist College",
					"Southern Wesleyan University": "Southern Wesleyan University",
					"Spartanburg Methodist College": "Spartanburg Methodist College",
					"Spartanburg Technical College": "Spartanburg Technical College",
					"Technical College of The Lowcountry": "Technical College of The Lowcountry",
					"The Citadel": "The Citadel",
					"Tri-County Technical College": "Tri-County Technical College",
					"Trident Technical College Main": "Trident Technical College Main",
					"Trident Technical College Palmer": "Trident Technical College Palmer",
					"Univ of South Carolina, Coastal Carolina College": "Univ of South Carolina, Co\
astal Carolina College",
					"University of South Carolina": "University of South Carolina",
					"University of South Carolina at Aiken": "University of South Carolina at Aiken\
",
					"University of South Carolina at Beaufort": "University of South Carolina at Be\
aufort",
					"University of South Carolina at Lancaster": "University of South Carolina at L\
ancaster",
					"University of South Carolina at Salkehatchie": "University of South Carolina a\
t Salkehatchie",
					"University of South Carolina at Spartanburg": "University of South Carolina at\
 Spartanburg",
					"University of South Carolina at Sumter": "University of South Carolina at Sumt\
er",
					"University of South Carolina at Union": "University of South Carolina at Union\
",
					"Voorhees College": "Voorhees College",
					"Williamsburg Technical College": "Williamsburg Technical College",
					"Winthrop University": "Winthrop University",
					"Wofford College": "Wofford College",
					"York Technical College": "York Technical College",
					"Other": "Other"
				};
				break;
			case "South Dakota":
				newOpts = {
					"": "",
					"Augustana College": "Augustana College",
					"Black Hills State University": "Black Hills State University",
					"Dakota State University": "Dakota State University",
					"Dakota Wesleyan University": "Dakota Wesleyan University",
					"Huron College": "Huron College",
					"Kilian Community College": "Kilian Community College",
					"Lake Area Vocational-Technical Institute": "Lake Area Vocational-Technical Ins\
titute",
					"Mitchell Technical Institute": "Mitchell Technical Institute",
					"MT Marty College": "MT Marty College",
					"National American University": "National American University",
					"Nettleton College": "Nettleton College",
					"North American Baptist Seminary": "North American Baptist Seminary",
					"Northern State University": "Northern State University",
					"Oglala Lakota College": "Oglala Lakota College",
					"Presentation College": "Presentation College",
					"Si Tanka University-Huron Campus": "Si Tanka University-Huron Campus",
					"Sinte Gleska University": "Sinte Gleska University",
					"Sisseton-Wahpeton Community College": "Sisseton-Wahpeton Community College",
					"South Dakota School of Mines and Technology": "South Dakota School of Mines an\
d Technology",
					"South Dakota State University": "South Dakota State University",
					"Southeast Vocational-Technical Institute": "Southeast Vocational-Technical Ins\
titute",
					"University of Sioux Falls": "University of Sioux Falls",
					"University of South Dakota, Vermillion": "University of South Dakota, Vermilli\
on",
					"Western Dakota Vocational-Technical Institute": "Western Dakota Vocational-Tec\
hnical Institute",
					"Other": "Other"
				};
				break;
			case "Tennessee":
				newOpts = {
					"": "",
					"Aquinas College": "Aquinas College",
					"Austin Peay State University": "Austin Peay State University",
					"Belmont College": "Belmont College",
					"Belmont University": "Belmont University",
					"Bethel College Tennessee": "Bethel College Tennessee",
					"Bristol College": "Bristol College",
					"Bryan College": "Bryan College",
					"Carson-Newman College": "Carson-Newman College",
					"Chattanooga State Technical Community College": "Chattanooga State Technical C\
ommunity College",
					"Christian Brothers University": "Christian Brothers University",
					"Clarksvlle Baptist College": "Clarksvlle Baptist College",
					"Cleveland State Community College": "Cleveland State Community College",
					"Columbia State Community College": "Columbia State Community College",
					"Crichton College": "Crichton College",
					"Cumberland University": "Cumberland University",
					"David Lipscomb College": "David Lipscomb College",
					"Draughons Junior College": "Draughons Junior College",
					"Dyersburg State Community College": "Dyersburg State Community College",
					"East Tennessee State University": "East Tennessee State University",
					"Edmondson Junior College of Business": "Edmondson Junior College of Business",
					"Faith Baptist Bible Institute": "Faith Baptist Bible Institute",
					"Fisk University": "Fisk University",
					"Free Will Baptist Bible College": "Free Will Baptist Bible College",
					"Freed-Hardeman College": "Freed-Hardeman College",
					"Hiwassee College": "Hiwassee College",
					"Jackson State Community College": "Jackson State Community College",
					"Johnson University": "Johnson University",
					"King College, Inc": "King College, Inc",
					"Knoxville College": "Knoxville College",
					"Lambuth University": "Lambuth University",
					"Lane College": "Lane College",
					"Lee University": "Lee University",
					"Lemoyne-Owen College": "Lemoyne-Owen College",
					"Lincoln Memorial University": "Lincoln Memorial University",
					"Lipscomb University": "Lipscomb University",
					"Martin Methodist College": "Martin Methodist College",
					"Maryville College": "Maryville College",
					"Meharry Medical College": "Meharry Medical College",
					"Memphis College of Art": "Memphis College of Art",
					"Middle Tennessee State University": "Middle Tennessee State University",
					"Milligan College": "Milligan College",
					"Morristown College": "Morristown College",
					"Motlow State Community College": "Motlow State Community College",
					"Nashville State Community College": "Nashville State Community College",
					"Northeast State Technical Community College": "Northeast State Technical Commu\
nity College",
					"Pellissippi State Community College": "Pellissippi State Community College",
					"Rhodes College": "Rhodes College",
					"Roane State Community College": "Roane State Community College",
					"Shelby State Community College": "Shelby State Community College",
					"South College": "South College",
					"Southern Adventist University": "Southern Adventist University",
					"Southern College of Optometry": "Southern College of Optometry",
					"Southwest Tennessee Community College": "Southwest Tennessee Community College\
",
					"State Technical Institute at Memphis": "State Technical Institute at Memphis",
					"Tennessee State University": "Tennessee State University",
					"Tennessee Technological University": "Tennessee Technological University",
					"Tennessee Wesleyan College": "Tennessee Wesleyan College",
					"Tomlinson College": "Tomlinson College",
					"Trevecca Nazarene College": "Trevecca Nazarene College",
					"Tusculum College": "Tusculum College",
					"Union University": "Union University",
					"University of Memphis": "University of Memphis",
					"University of Tennessee at Chattanooga": "University of Tennessee at Chattanoo\
ga",
					"University of Tennessee at Knoxville": "University of Tennessee at Knoxville",
					"University of Tennessee at Martin": "University of Tennessee at Martin",
					"University of Tennessee at Memphis": "University of Tennessee at Memphis",
					"University of The South": "University of The South",
					"Vanderbilt University": "Vanderbilt University",
					"Volunteer State Community College": "Volunteer State Community College",
					"Walters State Community College": "Walters State Community College",
					"Other": "Other"
				};
				break;
			case "Texas":
				newOpts = {
					"": "",
					"Abilene Christian University": "Abilene Christian University",
					"Alvin Community College": "Alvin Community College",
					"Amarillo College": "Amarillo College",
					"Ambassador College": "Ambassador College",
					"Amber University": "Amber University",
					"American Technological University": "American Technological University",
					"Angelina College": "Angelina College",
					"Angelo State University": "Angelo State University",
					"Arlington Baptist College": "Arlington Baptist College",
					"Art Institute Houston": "Art Institute Houston",
					"Austin College": "Austin College",
					"Austin Community College - Texas": "Austin Community College - Texas",
					"Austin Presbyterian Theological Seminary": "Austin Presbyterian Theological Se\
minary",
					"Bauder Fashion College": "Bauder Fashion College",
					"Baylor College of Dentistry": "Baylor College of Dentistry",
					"Baylor College of Medicine": "Baylor College of Medicine",
					"Baylor University-Baylor Athletics": "Baylor University-Baylor Athletics",
					"Bishop College": "Bishop College",
					"Blinn College": "Blinn College",
					"Brazosport College": "Brazosport College",
					"Brookhaven College": "Brookhaven College",
					"Cedar Valley College": "Cedar Valley College",
					"Central Texas College": "Central Texas College",
					"Cisco Junior College": "Cisco Junior College",
					"Clarendon College": "Clarendon College",
					"Coastal Bend College": "Coastal Bend College",
					"College of The Mainland": "College of The Mainland",
					"Collin County Community College": "Collin County Community College",
					"Concordia University Texas": "Concordia University Texas",
					"Cooke County College": "Cooke County College",
					"Criswell College": "Criswell College",
					"CY Fair College": "CY Fair College",
					"Dallas Baptist University": "Dallas Baptist University",
					"Dallas Theological Seminary": "Dallas Theological Seminary",
					"Del Mar College": "Del Mar College",
					"Devry Institute of Technology": "Devry Institute of Technology",
					"East Texas Baptist University": "East Texas Baptist University",
					"East Texas State University at Texarkana": "East Texas State University at Tex\
arkana",
					"Eastfield College": "Eastfield College",
					"El Centro College": "El Centro College",
					"El Paso Community College": "El Paso Community College",
					"Faith Christian College": "Faith Christian College",
					"Fashion Institute Houston": "Fashion Institute Houston",
					"Frank Phillips College": "Frank Phillips College",
					"Galveston College": "Galveston College",
					"Grayson County College": "Grayson County College",
					"Hardin-Simmons University": "Hardin-Simmons University",
					"Hill College": "Hill College",
					"Houston Baptist University": "Houston Baptist University",
					"Houston Community College System": "Houston Community College System",
					"Howard College": "Howard College",
					"Howard Payne University": "Howard Payne University",
					"Huston-Tillotson College": "Huston-Tillotson College",
					"ICI University": "ICI University",
					"Jacksonville College": "Jacksonville College",
					"Jarvis Christian College": "Jarvis Christian College",
					"Kilgore College": "Kilgore College",
					"Kingwood College": "Kingwood College",
					"Lamar State College-Port Arthur": "Lamar State College-Port Arthur",
					"Lamar University": "Lamar University",
					"Laredo Junior College": "Laredo Junior College",
					"Lee College": "Lee College",
					"Letourneau College": "Letourneau College",
					"Lon Morris College": "Lon Morris College",
					"Lone Star College System": "Lone Star College System",
					"Lubbock Christian University": "Lubbock Christian University",
					"McLennan Community College": "McLennan Community College",
					"McMurry College": "McMurry College",
					"Midland College": "Midland College",
					"Midwestern State University": "Midwestern State University",
					"Montgomery College": "Montgomery College",
					"Mountain View College": "Mountain View College",
					"Navarro College": "Navarro College",
					"North Central Texas College": "North Central Texas College",
					"North Harris College": "North Harris College",
					"North Lake College": "North Lake College",
					"Northeast Texas Community College": "Northeast Texas Community College",
					"Northwest Vista College": "Northwest Vista College",
					"Northwood Institute": "Northwood Institute",
					"Odessa College": "Odessa College",
					"Our Lady of The Lake University of San Antonio": "Our Lady of The Lake Univers\
ity of San Antonio",
					"Palo Alto College": "Palo Alto College",
					"Panola Junior College": "Panola Junior College",
					"Paris Junior College": "Paris Junior College",
					"Parker University": "Parker University",
					"Paul Quinn College": "Paul Quinn College",
					"Prairie View A & M University": "Prairie View A & M University",
					"Ranger Junior College": "Ranger Junior College",
					"Rice University": "Rice University",
					"Richland College": "Richland College",
					"Saint Philips College": "Saint Philips College",
					"Sam Houston State University": "Sam Houston State University",
					"San Antonio College": "San Antonio College",
					"San Jacinto College, Central Campus": "San Jacinto College, Central Campus",
					"San Jacinto College, North Campus": "San Jacinto College, North Campus",
					"San Jacinto College, South Campus": "San Jacinto College, South Campus",
					"Schreiner College": "Schreiner College",
					"South Plains College": "South Plains College",
					"South Texas Community College": "South Texas Community College",
					"Southern Methodist University": "Southern Methodist University",
					"Southwest Texas Junior College": "Southwest Texas Junior College",
					"Southwestern Adventist College": "Southwestern Adventist College",
					"Southwestern Assemblies of God University": "Southwestern Assemblies of God Un\
iversity",
					"Southwestern Baptist Theological Seminary": "Southwestern Baptist Theological \
Seminary",
					"Southwestern Christian College": "Southwestern Christian College",
					"Southwestern University": "Southwestern University",
					"St Edwards University": "St Edwards University",
					"St Edward's University": "St Edward's University",
					"St Marys University of San Antonio": "St Marys University of San Antonio",
					"Stephen F Austin State University": "Stephen F Austin State University",
					"Sul Ross State University": "Sul Ross State University",
					"Tarleton State University": "Tarleton State University",
					"Tarleton State University Central Texas": "Tarleton State University Central T\
exas",
					"Tarrant County College District": "Tarrant County College District",
					"Tarrant County Junior College - Northeast Campus": "Tarrant County Junior Coll\
ege - Northeast Campus",
					"Temple Junior College": "Temple Junior College",
					"Texarkana College": "Texarkana College",
					"Texas A & M International University": "Texas A & M International University",
					"Texas A & M University": "Texas A & M University",
					"Texas A & M University - Commerce": "Texas A & M University - Commerce",
					"Texas A & M University - Corpus Christi": "Texas A & M University - Corpus Chr\
isti",
					"Texas A & M University - Galveston": "Texas A & M University - Galveston",
					"Texas A & M University - Kingsville": "Texas A & M University - Kingsville",
					"Texas Chiropractic College": "Texas Chiropractic College",
					"Texas Christian University": "Texas Christian University",
					"Texas College": "Texas College",
					"Texas Lutheran College": "Texas Lutheran College",
					"Texas Southern University": "Texas Southern University",
					"Texas Southmost College": "Texas Southmost College",
					"Texas State Technical College": "Texas State Technical College",
					"Texas State Technical College": "Texas State Technical College",
					"Texas State Technical College - Waco": "Texas State Technical College - Waco",
					"Texas State Technical Institute - Harlingen": "Texas State Technical Institute\
 - Harlingen",
					"Texas State University, San Marcos": "Texas State University, San Marcos",
					"Texas Tech University": "Texas Tech University",
					"Texas Tech University Health Science College": "Texas Tech University Health S\
cience College",
					"Texas Wesleyan College": "Texas Wesleyan College",
					"Texas Woman's University": "Texas Woman's University",
					"The Art Institute of Dallas": "The Art Institute of Dallas",
					"Tomball College": "Tomball College",
					"Trinity University": "Trinity University",
					"Trinity Valley Community College": "Trinity Valley Community College",
					"Tyler Junior College": "Tyler Junior College",
					"Univ of Texas Health Science Center at San Antonio": "Univ of Texas Health Sci\
ence Center at San Antonio",
					"Univ of Texas Health Science Center-San Antonio": "Univ of Texas Health Scienc\
e Center-San Antonio",
					"Univ of Texas Southwestern Medical Ctr at Dallas": "Univ of Texas Southwestern\
 Medical Ctr at Dallas",
					"University of Dallas": "University of Dallas",
					"University of Houston - Clear Lake": "University of Houston - Clear Lake",
					"University of Houston - Downtown": "University of Houston - Downtown",
					"University of Houston - University Park": "University of Houston - University \
Park",
					"University of Houston - Victoria": "University of Houston - Victoria",
					"University of Mary Hardin-Baylor": "University of Mary Hardin-Baylor",
					"University of North Texas": "University of North Texas",
					"University of St Thomas": "University of St Thomas",
					"University of Texas Medical Branch": "University of Texas Medical Branch",
					"University of Texas-Arlington": "University of Texas-Arlington",
					"University of Texas-Austin": "University of Texas-Austin",
					"University of Texas-Brownsville": "University of Texas-Brownsville",
					"University of Texas-Dallas": "University of Texas-Dallas",
					"University of Texas-El Paso": "University of Texas-El Paso",
					"University of Texas-Houston": "University of Texas-Houston",
					"University of Texas-Permian Basin": "University of Texas-Permian Basin",
					"University of Texas-Rio Grande Valley": "University of Texas-Rio Grande Valley\
",
					"University of Texas-San Antonio": "University of Texas-San Antonio",
					"University of Texas-Tyler": "University of Texas-Tyler",
					"University of The Incarnate Word": "University of The Incarnate Word",
					"Vernon Regional Junior College": "Vernon Regional Junior College",
					"Victoria College": "Victoria College",
					"Wade College": "Wade College",
					"Wayland Baptist University": "Wayland Baptist University",
					"Weatherford College": "Weatherford College",
					"West Texas A&M University": "West Texas A&M University",
					"Western Texas College": "Western Texas College",
					"Wharton County Junior College": "Wharton County Junior College",
					"Wiley College": "Wiley College",
					"Woodcrest College": "Woodcrest College",
					"Other": "Other"
				};
				break;
			case "Utah":
				newOpts = {
					"": "",
					"Brigham Young University": "Brigham Young University",
					"Broadview University": "Broadview University",
					"College of Eastern Utah": "College of Eastern Utah",
					"Dixie State College": "Dixie State College",
					"George Wythe College": "George Wythe College",
					"Lds Business College": "Lds Business College",
					"Salt Lake Community College": "Salt Lake Community College",
					"Snow College": "Snow College",
					"Southern Utah University": "Southern Utah University",
					"The Stevens-Henager College of Business": "The Stevens-Henager College of Busi\
ness",
					"The Stevens-Henager College of Business": "The Stevens-Henager College of Busi\
ness",
					"University of Utah": "University of Utah",
					"Utah State University": "Utah State University",
					"Utah Technical College": "Utah Technical College",
					"Utah Valley University": "Utah Valley University",
					"Weber State University": "Weber State University",
					"Western Governors University": "Western Governors University",
					"Westminster College of Salt Lake City": "Westminster College of Salt Lake City\
",
					"Other": "Other"
				};
				break;
			case "Virginia":
				newOpts = {
					"": "",
					"Apprentice School of The": "Apprentice School of The",
					"Art Institute of Washington": "Art Institute of Washington",
					"Atlantic Baptist Bible College": "Atlantic Baptist Bible College",
					"Averett College": "Averett College",
					"Blue Ridge Community College": "Blue Ridge Community College",
					"Bluefield College": "Bluefield College",
					"Bridgewater College": "Bridgewater College",
					"Bryant & Stratton College": "Bryant & Stratton College",
					"Central Virginia Community College": "Central Virginia Community College",
					"Christendom College": "Christendom College",
					"Christopher Newport College": "Christopher Newport College",
					"Clinch Valley College": "Clinch Valley College",
					"College of Health Science": "College of Health Science",
					"College of William and Mary in Virginia": "College of William and Mary in Virg\
inia",
					"Commonwealth College Hampton": "Commonwealth College Hampton",
					"Commonwealth College Norfolk": "Commonwealth College Norfolk",
					"Commonwealth College Richmond": "Commonwealth College Richmond",
					"Dabney S Lancaster Community College": "Dabney S Lancaster Community College",
					"Danville Community College": "Danville Community College",
					"DeVry University": "DeVry University",
					"Eastern Mennonite College & Seminary": "Eastern Mennonite College & Seminary",
					"Eastern Shore Community College": "Eastern Shore Community College",
					"Eastern Virginia Medical School": "Eastern Virginia Medical School",
					"ECPI University": "ECPI University",
					"Emory & Henry College": "Emory & Henry College",
					"Ferrum College": "Ferrum College",
					"George Mason University": "George Mason University",
					"Germanna Community College": "Germanna Community College",
					"Hampden-Sydney College": "Hampden-Sydney College",
					"Hampton University": "Hampton University",
					"Hollins College": "Hollins College",
					"J Sargent Reynolds Community College": "J Sargent Reynolds Community College",
					"J Sargent Reynolds Community College Parham": "J Sargent Reynolds Community Co\
llege Parham",
					"James Madison University": "James Madison University",
					"John Tyler Community College": "John Tyler Community College",
					"Katherine Gibbs School": "Katherine Gibbs School",
					"Liberty University": "Liberty University",
					"Longwood College": "Longwood College",
					"Lord Fairfax Community College": "Lord Fairfax Community College",
					"Lynchburg College": "Lynchburg College",
					"Mary Baldwin College": "Mary Baldwin College",
					"Mary Washington College": "Mary Washington College",
					"Marymount University": "Marymount University",
					"Mountain Empire Community College": "Mountain Empire Community College",
					"New River Community College": "New River Community College",
					"Norfolk State University": "Norfolk State University",
					"Northern Virginia Community College": "Northern Virginia Community College",
					"Northern Virginia Community College": "Northern Virginia Community College",
					"Northern Virginia Community College": "Northern Virginia Community College",
					"Northern Virginia Community College": "Northern Virginia Community College",
					"Northern Virginia Community College": "Northern Virginia Community College",
					"Notre Dame Graduate School of Christendom College": "Notre Dame Graduate Schoo\
l of Christendom College",
					"Old Dominion University": "Old Dominion University",
					"Patrick Henry Community College": "Patrick Henry Community College",
					"Paul D Camp Community College": "Paul D Camp Community College",
					"Piedmont Virginia Community College": "Piedmont Virginia Community College",
					"Presbyterian School of Christian Education": "Presbyterian School of Christian\
 Education",
					"Radford University": "Radford University",
					"Randolph-Macon College": "Randolph-Macon College",
					"Randolph-Macon Women's College": "Randolph-Macon Women's College",
					"Rappahannock Community College": "Rappahannock Community College",
					"Regent University": "Regent University",
					"Richard Bland College": "Richard Bland College",
					"Roanoke College": "Roanoke College",
					"Shenandoah University": "Shenandoah University",
					"Skyline College": "Skyline College",
					"Southern Seminary College": "Southern Seminary College",
					"Southern Virginia University": "Southern Virginia University",
					"Southside Virginia Community College": "Southside Virginia Community College",
					"Southside Virginia Community College": "Southside Virginia Community College",
					"Southwest Virginia Community College": "Southwest Virginia Community College",
					"St Lukes Hospital": "St Lukes Hospital",
					"St Pauls College Virginia": "St Pauls College Virginia",
					"Stratford College": "Stratford College",
					"Strayer University": "Strayer University",
					"Strayer University - Global Campus": "Strayer University - Global Campus",
					"Sweet Briar College": "Sweet Briar College",
					"Thomas Nelson Community College": "Thomas Nelson Community College",
					"Tidewater Community College": "Tidewater Community College",
					"University of Mary Washington": "University of Mary Washington",
					"University of Richmond": "University of Richmond",
					"University of Virginia": "University of Virginia",
					"University of Virginia College at Wise": "University of Virginia College at Wi\
se",
					"Virginia Commonwealth University": "Virginia Commonwealth University",
					"Virginia Highlands Community College": "Virginia Highlands Community College",
					"Virginia Intermont College": "Virginia Intermont College",
					"Virginia Military Institute": "Virginia Military Institute",
					"Virginia Polytechnic Institute & State University": "Virginia Polytechnic Inst\
itute & State University",
					"Virginia State University": "Virginia State University",
					"Virginia Union University": "Virginia Union University",
					"Virginia Wesleyan College": "Virginia Wesleyan College",
					"Virginia Western Community College": "Virginia Western Community College",
					"Washington and Lee University": "Washington and Lee University",
					"Wytheville Community College": "Wytheville Community College",
					"Other": "Other"
				};
				break;
			case "U.S. Virgin Islands":
				newOpts = {
					"": "",
					"H Lavity Stoutt Community College": "H Lavity Stoutt Community College",
					"University of The Virgin Islands": "University of The Virgin Islands",
					"Other": "Other"
				};
				break;
			case "Vermont":
				newOpts = {
					"": "",
					"Bennington College": "Bennington College",
					"Burlington College": "Burlington College",
					"Castleton State College": "Castleton State College",
					"Champlain College": "Champlain College",
					"College of St Joseph in Vermont": "College of St Joseph in Vermont",
					"Community College of Vermont": "Community College of Vermont",
					"Goddard College": "Goddard College",
					"Green Mountain College": "Green Mountain College",
					"Johnson State College": "Johnson State College",
					"Landmark College": "Landmark College",
					"Lyndon State College": "Lyndon State College",
					"Marlboro College": "Marlboro College",
					"Middlebury College": "Middlebury College",
					"Norwich University": "Norwich University",
					"Royalton College": "Royalton College",
					"School for International Training": "School for International Training",
					"Southern Vermont College": "Southern Vermont College",
					"St Michaels College": "St Michaels College",
					"Sterling College": "Sterling College",
					"Trinity College": "Trinity College",
					"University of Vermont": "University of Vermont",
					"Vermont College of Norwich University": "Vermont College of Norwich University\
",
					"Vermont Law School": "Vermont Law School",
					"Vermont Technical College": "Vermont Technical College",
					"Other": "Other"
				};
				break;
			case "Washington":
				newOpts = {
					"": "",
					"Antioch University": "Antioch University",
					"Argosy University": "Argosy University",
					"Art Institute of Seattle": "Art Institute of Seattle",
					"Bastyr University": "Bastyr University",
					"Bates Technical College": "Bates Technical College",
					"Bellevue College": "Bellevue College",
					"Bellingham Technical College": "Bellingham Technical College",
					"Big Bend Community College": "Big Bend Community College",
					"Career Floral Design Institute": "Career Floral Design Institute",
					"Carrington College Spokane": "Carrington College Spokane",
					"Cascadia Community College": "Cascadia Community College",
					"Central Washington University": "Central Washington University",
					"Centralia College": "Centralia College",
					"City University": "City University",
					"Clark College": "Clark College",
					"Clover Park Technical College": "Clover Park Technical College",
					"Cogswell College North": "Cogswell College North",
					"Columbia Basin College": "Columbia Basin College",
					"Corban University": "Corban University",
					"Cornish College of The Arts": "Cornish College of The Arts",
					"Devry University": "Devry University",
					"Eastern Washington University": "Eastern Washington University",
					"Edmonds Community College": "Edmonds Community College",
					"Everett Community College": "Everett Community College",
					"Evergreen State College": "Evergreen State College",
					"Fort Wright College": "Fort Wright College",
					"Foundation for International Services Inc": "Foundation for International Serv\
ices Inc",
					"Garrett Heyns Education Center": "Garrett Heyns Education Center",
					"Gonzaga University": "Gonzaga University",
					"Grays Harbor College": "Grays Harbor College",
					"Green River Community College": "Green River Community College",
					"Griffin College": "Griffin College",
					"Henry Cogswell College": "Henry Cogswell College",
					"Heritage University": "Heritage University",
					"Highline Community College": "Highline Community College",
					"ITT Technical Institute": "ITT Technical Institute",
					"John Bastyr College": "John Bastyr College",
					"L H Bates Vocational-Technical College": "L H Bates Vocational-Technical Colle\
ge",
					"Lake Wash Tech Coll Kirkland": "Lake Wash Tech Coll Kirkland",
					"Lake Washington Technical College": "Lake Washington Technical College",
					"Lower Columbia College": "Lower Columbia College",
					"Lutheran Bible Institute": "Lutheran Bible Institute",
					"Moody Northwest": "Moody Northwest",
					"North Seattle Community College": "North Seattle Community College",
					"Northwest College of The Assemblies of God": "Northwest College of The Assembl\
ies of God",
					"Northwest Indian College": "Northwest Indian College",
					"Northwest University": "Northwest University",
					"Olympia Technical Community College": "Olympia Technical Community College",
					"Olympic College": "Olympic College",
					"Other Wash State Jr Coll": "Other Wash State Jr Coll",
					"Other Wash State Sr Coll": "Other Wash State Sr Coll",
					"Pacific Lutheran University": "Pacific Lutheran University",
					"Peninsula College": "Peninsula College",
					"Pierce College": "Pierce College",
					"Puget Sound Christian College": "Puget Sound Christian College",
					"Renton Technical College": "Renton Technical College",
					"Saint Martins": "Saint Martins",
					"Saint Martin's University": "Saint Martin's University",
					"Seattle Central Community College": "Seattle Central Community College",
					"Seattle Community College": "Seattle Community College",
					"Seattle Pacific University": "Seattle Pacific University",
					"Seattle University": "Seattle University",
					"Seattle University of Law": "Seattle University of Law",
					"Seattle Vocational Institute": "Seattle Vocational Institute",
					"Shoreline Community College": "Shoreline Community College",
					"Skagit Valley College": "Skagit Valley College",
					"South Puget Sound Community College": "South Puget Sound Community College",
					"South Seattle Community College": "South Seattle Community College",
					"Spokane Community College": "Spokane Community College",
					"Spokane Falls Community College": "Spokane Falls Community College",
					"St Edwards Seminary": "St Edwards Seminary",
					"Tacoma Community College": "Tacoma Community College",
					"Trinity Lutheran College": "Trinity Lutheran College",
					"University of Puget Sound": "University of Puget Sound",
					"University of Washington": "University of Washington",
					"Walla Walla Community College": "Walla Walla Community College",
					"Walla Walla University": "Walla Walla University",
					"Washington Baptist College of Biblical Education": "Washington Baptist College\
 of Biblical Education",
					"Washington Community College": "Washington Community College",
					"Washington State University": "Washington State University",
					"Wenatchee Valley College": "Wenatchee Valley College",
					"Western Washington University": "Western Washington University",
					"Whatcom Community College": "Whatcom Community College",
					"Whitman College": "Whitman College",
					"Whitworth University": "Whitworth University",
					"Yakima Valley Community College": "Yakima Valley Community College",
					"Other": "Other"
				};
				break;
			case "Wisconsin":
				newOpts = {
					"": "",
					"Alverno College": "Alverno College",
					"Bellin College of Nursing": "Bellin College of Nursing",
					"Beloit College": "Beloit College",
					"Blackhawk Technical College": "Blackhawk Technical College",
					"Bryant & Stratton College": "Bryant & Stratton College",
					"Cardinal Stritch College": "Cardinal Stritch College",
					"Carroll College Wisconsin": "Carroll College Wisconsin",
					"Carthage College": "Carthage College",
					"Chippewa Valley Technical College": "Chippewa Valley Technical College",
					"Concordia University Wisconsin": "Concordia University Wisconsin",
					"Edgewood College": "Edgewood College",
					"Fox Valley Technical College": "Fox Valley Technical College",
					"Gateway Technical College": "Gateway Technical College",
					"Herzing University": "Herzing University",
					"Immanuel Lutheran College": "Immanuel Lutheran College",
					"Lakeland College": "Lakeland College",
					"Lakeshore Technical College": "Lakeshore Technical College",
					"Lawrence University": "Lawrence University",
					"Madison Area Technology College - Madison": "Madison Area Technology College -\
 Madison",
					"Maranatha Baptist Bible College": "Maranatha Baptist Bible College",
					"Marian College of Fond Du Lac": "Marian College of Fond Du Lac",
					"Marquette University": "Marquette University",
					"Medical College of Wisconsin": "Medical College of Wisconsin",
					"Mid State Technical College": "Mid State Technical College",
					"Milwaukee Area Technical College": "Milwaukee Area Technical College",
					"Milwaukee Institute of Art and Design": "Milwaukee Institute of Art and Design\
",
					"Milwaukee School of Engineering": "Milwaukee School of Engineering",
					"Moraine Park Technical College": "Moraine Park Technical College",
					"Mount Mary College": "Mount Mary College",
					"Mount Senario College": "Mount Senario College",
					"Nicolet Area Technical College": "Nicolet Area Technical College",
					"Northcentral Technical College": "Northcentral Technical College",
					"Northeast Wisconsin Technical College": "Northeast Wisconsin Technical College\
",
					"Northland College": "Northland College",
					"Northwestern College Wisconsin": "Northwestern College Wisconsin",
					"Racine-Kenosha County Teachers College": "Racine-Kenosha County Teachers Colle\
ge",
					"Ripon College": "Ripon College",
					"Silver Lake College of The Holy Family": "Silver Lake College of The Holy Fami\
ly",
					"St Josephs Hospital": "St Josephs Hospital",
					"St Norbert College": "St Norbert College",
					"Stratton College": "Stratton College",
					"University of Wisconsin Colleges": "University of Wisconsin Colleges",
					"University of Wisconsin-Eau Claire": "University of Wisconsin-Eau Claire",
					"University of Wisconsin-Green Bay": "University of Wisconsin-Green Bay",
					"University of Wisconsin-Lacrosse": "University of Wisconsin-Lacrosse",
					"University of Wisconsin-Madison": "University of Wisconsin-Madison",
					"University of Wisconsin-Milwaukee": "University of Wisconsin-Milwaukee",
					"University of Wisconsin-Oshkosh": "University of Wisconsin-Oshkosh",
					"University of Wisconsin-Parkside": "University of Wisconsin-Parkside",
					"University of Wisconsin-Platteville": "University of Wisconsin-Platteville",
					"University of Wisconsin-River Falls": "University of Wisconsin-River Falls",
					"University of Wisconsin-Stevens Point": "University of Wisconsin-Stevens Point\
",
					"University of Wisconsin-Stout": "University of Wisconsin-Stout",
					"University of Wisconsin-Superior": "University of Wisconsin-Superior",
					"University of Wisconsin-Whitewater": "University of Wisconsin-Whitewater",
					"Viterbo College": "Viterbo College",
					"Waukesha County Technical College": "Waukesha County Technical College",
					"Western Wisconsin Technical College": "Western Wisconsin Technical College",
					"Wisconsin Lutheran College": "Wisconsin Lutheran College",
					"Other": "Other"
				};
				break;
			case "West Virginia":
				newOpts = {
					"": "",
					"Alderson-Broaddus College": "Alderson-Broaddus College",
					"American Public University System": "American Public University System",
					"Bethany College": "Bethany College",
					"Bluefield State College": "Bluefield State College",
					"Concord College": "Concord College",
					"Davis & Elkins College": "Davis & Elkins College",
					"Fairmont State College": "Fairmont State College",
					"Glenville State College": "Glenville State College",
					"Huntington Junior College": "Huntington Junior College",
					"Marshall University": "Marshall University",
					"Mountain State University": "Mountain State University",
					"Ohio Valley University": "Ohio Valley University",
					"Ohio Valley University": "Ohio Valley University",
					"Potomac State College of West Virginia University": "Potomac State College of \
West Virginia University",
					"Salem Teikyo University": "Salem Teikyo University",
					"Shepherd University": "Shepherd University",
					"Southern West Virginia Community & Technical Coll": "Southern West Virginia Co\
mmunity & Technical Coll",
					"University of Charleston": "University of Charleston",
					"West Liberty State College": "West Liberty State College",
					"West Virginia Institute of Technology": "West Virginia Institute of Technology\
",
					"West Virginia Northern Community College": "West Virginia Northern Community C\
ollege",
					"West Virginia State College": "West Virginia State College",
					"West Virginia University": "West Virginia University",
					"West Virginia University at Parkersburg": "West Virginia University at Parkers\
burg",
					"West Virginia Wesleyan College": "West Virginia Wesleyan College",
					"Wheeling Jesuit University": "Wheeling Jesuit University",
					"Other": "Other"
				};
				break;
			case "Wyoming":
				newOpts = {
					"": "",
					"Casper College": "Casper College",
					"Central Wyoming College": "Central Wyoming College",
					"Eastern Wyoming College": "Eastern Wyoming College",
					"Laramie County Community College": "Laramie County Community College",
					"Northern Wyoming Community College District": "Northern Wyoming Community Coll\
ege District",
					"Northwest College": "Northwest College",
					"Powell Community College": "Powell Community College",
					"University of Wyoming": "University of Wyoming",
					"Western Wyoming College": "Western Wyoming College",
					"Other": "Other"
				};
				break;
			default:
		}

		return newOpts;
	}

	////////////////////////////////////////////////////////////////////////////////////////////
	// §3.3: initInstitutionSelectors(…)

	function initInstitutionSelectors ( selector, nextSelector ) {
		var $selectors = $( selector + ' select' );
		var $thisChild;
		var slctdLocation;
		var $thisParent;
		var $nextParent;
		var $nextParentInput;
		var newOpts;

		$selectors.each( function() {
			$thisChild = $(this);
			slctdLocation = $thisChild.val();
			$thisParent = $thisChild.parents( selector ).first();
			$nextParent = $thisParent.nextAll( nextSelector ).first();
			$nextParentInput = $nextParent.find( 'select' ).first();
			newOpts = getNewNameOpts( slctdLocation );
			if( newOpts != null && $nextParentInput != null ) {
				$nextParentInput.empty();
				$.each( newOpts, function( key, value ) {
					$nextParentInput.append( $( '<option></option>' ).attr( 'value', value ).text( key ) );
				} );
				$nextParentInput.trigger( 'chosen:updated' );
			}
		});
	}

	////////////////////////////////////////////////////////////////////////////////////////////
	// §3.2: setupEnhancedUploadChain(…)

	/**
	 * Setup a chain of file uploading inputs, wherein only the left-most input in the tree is
	 *  visible. As the user uploads files in sequence, the next nearest neighbor is unveiled.
	 */
	function setupEnhancedUploadChain (selector, selectorExtra) {
		if ($.type(selector) === "string") {
			/* CHECK IF UPLOADS ALREADY EXIST:
			 *  It is possible to arrive at this point in execution after the user has submitted a
			 *  form containing errors that also already contains transcripts uploaded to input
			 *  fields that will be hidden by default. The following blocks of code resolve this
			 *  situation by showing such fields, as well as their nearest neighbors.
			 */
			var $inputs = $(selector + " input[type='file']");
			$inputs.each(function () {
				var $thisInput = $(this);
				var $nextDiv = $thisInput.nextAll("div[id]").first();
				if($nextDiv.length > 0) {
					$thisInput.addClass("gf-value-entered");
					var $parentOfInput = $thisInput.parents(selector).first();
					var $parentNextExtra = $parentOfInput.nextAll(selectorExtra).first();
					var $parentNextSblngs = $parentOfInput.nextAll(selector).first();
					$parentOfInput.removeClass("gf-hidden");
					$parentOfInput.addClass("gf_left_half");
					$parentNextExtra.removeClass("gf-hidden");
					$parentNextSblngs.removeClass("gf-hidden");
				}
			});
			$(".gform_body").on("change", selector + " input[type='file']", function () {
				var $thisInput = $(this);
				if($thisInput.prop("files") != null && $thisInput.prop("files").length > 0) {
					var valuePassed = true;
					var $parentOfInput = $thisInput.parents(selector).first();
					var $parentNextSblngs = $parentOfInput.nextAll(selector);
					var $parentPrevSblngs = $parentOfInput.prevAll(selector);
					if($parentNextSblngs.length != 0 || $parentPrevSblngs.length != 0) {
						var originalFileName = $thisInput.prop("files").item(0).name;
						$parentPrevSblngs.each(function () {
							if(valuePassed) {
								var $thisSblng = $(this);
								var $thisSblngInput = $thisSblng.find("input[type='file']").first();
								if($thisSblngInput.prop("files") != null && 
										$thisSblngInput.prop("files").length > 0) {
									var thisFileName = $thisSblngInput.prop("files").item(0).name;
									valuePassed = originalFileName != thisFileName;
								}
							}
						});
						$parentNextSblngs.each(function () {
							if(valuePassed) {
								var $thisSblng = $(this);
								var $thisSblngInput = $thisSblng.find("input[type='file']").first();
								if($thisSblngInput.prop("files") != null && 
										$thisSblngInput.prop("files").length > 0) {
									var thisFileName = $thisSblngInput.prop("files").item(0).name;
									valuePassed = originalFileName != thisFileName;
								}
							}
						});
					}
					if(valuePassed) {                      
						var $parentNextExtra = $parentOfInput.nextAll(selectorExtra).first();
						$thisInput.addClass("gf-value-entered");
						$parentNextSblngs.first().removeClass("gf-hidden");
						$parentOfInput.addClass("gf_left_half");
						$parentNextExtra.removeClass("gf-hidden");
					}
					else
					{
						alert("A file with the same name has already been uploaded; please choose a\
 different file.");
						$thisInput.get(0).value = "";
					}
				}
				else {
					$thisChild.removeClass("gf-value-entered");
				}
			});
		}
	}

	////////////////////////////////////////////////////////////////////////////////////////////
	// §3.4: setupInstitutionSelectors(…)

	function setupInstitutionSelectors ( selector, nextSelector ) {
		if ( $.type( selector ) === 'string' ) {
			$( '.gform_body' ).on( 'change', selector + ' select', function () {
				var $thisChild = $( this );
				var slctdLocation = $thisChild.val();
				var $thisParent = $thisChild.parents( selector ).first();
				var $nextParent = $thisParent.nextAll( nextSelector ).first();
				var $nextParentInput = $nextParent.find( 'select' ).first();
				var newOpts = getNewNameOpts( slctdLocation );

				if( newOpts != null && $nextParentInput != null ) {
					$nextParentInput.empty();
					$.each(newOpts, function( key, value ) {
						$nextParentInput.append( $( '<option></option>' ).attr( 'value', value ).text( key ) );
					} );
					$nextParentInput.trigger( 'chosen:updated' );
				}
			} );
		}
	}
} )( jQuery );
