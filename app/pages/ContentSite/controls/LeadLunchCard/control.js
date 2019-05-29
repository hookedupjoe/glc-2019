(function (ActionAppCore, $) {

  var ControlSpecs = {
    options: {
      padding: true,
      customData: {
        speakerDetails: {
          "title": "2019 Conference Speakers",
          "message": "Come hear what these exciting speakers have to say, PENDING REVIEW",
          "order": [
        		"abate",
        		"baumbick",
        		"keese",
        		"massimino",
        		"murphy",
        		"ravi",
        		"rocker",
        		"thomas",
        		"tullman",
        		"wilson",
        		"mcelroy"
          ],
          "lunch": [
            "drake",
            "kiefer",
            "reed",
            "smiley"
          ],
          "imageLoc": [
            "./res/"
          ],
          "index": {
            "baumbick": {
              "key": "baumbick",
              "name": "Jim Baumbick",
              "org": "Ford Motor Company",
              "title": "Vice President, Enterprise Product Line Management, Strategy & Planning",
              "img": "baumbick.jpg",
              "bio": [
                "Jim Baumbick is vice president, Ford Enterprise Product Line Management, effective Sept. 1, 2018. At the same time, he is elected a company officer. He reports to Joe Hinrichs, president Automotive, Ford Motor Company. ",
                "In this role, Baumbick is responsible for global product strategy and planning as well as leading the global product line teams that are using deep customer insights to deliver products customers really want and value and to drive end-to-end business results.",
                "Previously, Baumbick served as executive director of Global Product Planning and Strategy. In this role, he led the development of the company&#146s flexible modular architecture approach, a key enabler for product development fitness. Baumbick also developed new capital allocation and cycle planning processes to prioritize winning businesses to support the company&#146s overall fitness efforts.",
                "Baumbick joined Ford in 1993 as a Ford College Graduate. Since then, he has served in a variety of roles core to the product development process, including financial and profit analysis, engineering, product planning and program management, as well as operations. Specific roles included chief engineer of Unibody Products, engineering director for Asia Pacific & Africa, director of global product development quality and GPDS, the company&#146s product development system.  In addition, Baumbick serves as the vehicle line and platform director for development of Ford&#146s front-wheel-drive/all-wheel-drive flexible architecture.",
                "Baumbick&#146s leadership was recognized early in his career when he was named a recipient of the Automotive Hall of Fame&#146s Young Leadership and Excellence Award in 2003. The award, given since the 1980s, recognizes up-and-coming automotive professionals who demonstrate exceptional leadership qualities in their work.",
                "Baumbick holds a bachelor&#146s degree in Mechanical Engineering from Michigan State University as well as a master&#146s degree in Mechanical Engineering from the University of Michigan and an MBA from Michigan State University."
              ],
              "day": "Friday"
            },
            "desormeaux": {
              "key": "desormeaux",
              "name": "Joe Desormeaux",
              "org": "",
              "title": "SAE Detroit Section Chair",
              "img": "desormeaux.jpg",
              "bio": [],
              "day": "Friday"
            },
            "drake": {
              "key": "drake",
              "name": "Lisa Drake",
              "org": "Ford Motor Company",
              "title": "Vice President, Global Powertrain and Purchasing Operations",
              "img": "drake.jpg",
              "bio": [
                "Lisa Drake is vice president, Global Powertrain Purchasing and Global Purchasing Operations, effective Jan. 1, 2018.",
                "In this role, Drake is responsible for all powertrain purchasing operations worldwide and global operational purchasing performance. She reports to Hau Thai-Tang, executive vice president, Product Development and Purchasing.",
                "She joined purchasing in 2013 as director, Global Program Purchasing, and most recently served as director, Global Interior Purchasing, a position she held since August 2016.",
                "Before purchasing, Drake held various positions in Product Development for nearly 20 years. In 2004, she led the F-150 product and launch team during the construction of the state-of-the-art Dearborn Truck Plant at the Ford Rouge Center. Her other notable positions include chief engineer, Lincoln MKC; assistant chief engineer, F-Series Super Duty; and program manager roles for Explorer and Expedition.",
                "Drake also served as the Global Hybrid / Battery Electric Vehicle chief engineer from May 2007 to September 2010. In this position, she led the development and delivery of Fusion Hybrid, Lincoln MKZ Hybrid, and the C-Max Hybrid and Energi programs.",
                "In addition to her work with hybrid and plug-in hybrids, Drake led the development of the Focus Electric and the Transit Connect Electric. In 2008, the Automotive Hall of Fame awarded her the Young Leadership and Excellence Award, in recognition of her contributions and leadership in the growing field of electrification.",
                "Drake joined Ford in 1994 as a Ford College Graduate in powertrain engineering. She holds a Bachelor of Science in Mechanical Engineering from Carnegie Mellon University and a Master of Business Administration from the University of Michigan, Ann Arbor."
              ],
              "day": "Saturday"
            },
            "abate": {
              "key": "abate",
              "name": "Elatia Abate",
              "org": "",
              "title": "Entrepreneur and Chief Explorer",
              "img": "elatia.jpg",
              "bio": [
                "Elatia Abate is the CEO of a start-up that matches advisors with innovation projects. She is an expert on the future of work, blockchain applications, and building cultures of creativity. She works with organizations that range in size from Fortune 500 to early-stage start-ups. She coaches the Scaling Social Innovation Lab at The University of Chicago Booth School of Business.",
                "She is a sought-after speaker and lecturer, having delivered a TEDx titled, &#147Pioneering The Future of Work.&#148 Other recent speaking engagements include &#147The Future of Work&#148 at the Illinois Hispanic Chamber of Commerce&#146s Annual Convention (August 2017), &#147Design Your Dream Career&#148 at University of Chicago Booth School of Business (February 2018) and keynoting Fundación RAP&#146s Seminar on Employment and Inclusion with a talk entitled &#147Preparing For The Fourth Industrial Revolution&#148 at Tulane University (March 2018). She is also the voice of &#147Good Evening,&#148 Brazil's Gazeta do Povo English language nightly news briefing.",
                "Before leaving the corporate world, Ms. Abate served as Vice President of Human Resources at Dow Jones & Company and Global Director Talent Acquisition at Anheuser-Busch InBev. At both organizations she led global initiatives to build cultures of innovation through human capital strategy.",
                "She teaches in the Continuing Studies departments of Stanford University and University of Toronto. Her work has been featured in Forbes, The Wall Street Journal, Estadão and Fast Company."
              ],
              "day": "Friday"
            },
            "keese": {
              "key": "keese",
              "name": "Stephan Keese",
              "org": "Roland Berger. LLC",
              "title": "Senior Partner ",
              "img": "keese.jpg",
              "bio": [
                "Stephan Keese is the Head of Roland Berger`s North American automotive practice. His personal focus includes the automotive supplier as well as the commercial vehicle sectors. Mr. Keese yields nearly 20 years of consulting experience in the automotive industry. Before joining Roland Berger's Chicago office, he was responsible for Roland Berger`s Latin American automotive practice based in Sao Paulo, Brazil. ",
                "His fields of expertise are in strategic work, corporate growth, new business models, market entry, M&A support/due diligence, efficiency increase, operational cost reduction and restructuring. ",
                "He studied Industrial Engineering in Germany and holds a MBA from Georgetown University (Washington, DC, USA)."
              ],
              "day": "Friday"
            },
            "kiefer": {
              "key": "kiefer",
              "name": "Steve Kiefer",
              "org": "General Motors",
              "title": "Senior Vice President, Global Purchasing and Supply Chain",
              "img": "kiefer.jpg",
              "bio": [
                "Steve Kiefer is senior vice president, GM Global Purchasing and Supply Chain, a position he has held since November 2014. Kiefer is a member of the GM Senior Leadership Team.",
                "Kiefer is responsible for the strategic direction of GM&#146s worldwide purchasing, supply chain and logistics operations. Drawing on extensive technical expertise and first-hand experience as a supplier, he is focused on collaborating with suppliers to deliver exceptional vehicle quality, innovation and value to GM customers.",
                "Kiefer returned to GM in September 2013 as Vice President, Global Powertrain, after more than a decade of senior leadership roles with the automotive supplier Delphi.  ",
                "Kiefer began his career in 1983 as a college cooperative student with GM North American Car Group. He has held various leadership roles within GM and Delphi throughout his career, including Senior Vice President of Delphi and president of Delphi Powertrain Systems. ",
                "Kiefer is a member of the Advisory Board of Focus: HOPE and the Michigan State University College of Engineering Alumni Association Board. He is GM&#146s key executive at Michigan State University and previously served as a member of the Berkeley Engineering Advisory Board, the Supervisory Board of Adam Opel AG in Germany and the board of directors of United Way for Southeastern Michigan. Kiefer is the founder of The Kiefer Foundation whose mission is to end distracted driving and all associated traffic deaths and injuries. In July 2018, he received the Distinguished Service Citation from the Automotive Hall of Fame honoring the work he has done to end distracted driving through the Kiefer Foundation.",
                "Kiefer received a master's degree in business administration from the University of Michigan. He earned a bachelor's degree in mechanical engineering from Michigan State University, which included engineering studies at RWTH Aachen University in Germany."
              ],
              "day": "Friday"
            },
            "massimino": {
              "key": "massimino",
              "name": "Mike Massimino",
              "org": "",
              "title": "Former NASA Astronaut, Columbia University Engineering Professor",
              "img": "massimino.jpg",
              "bio": [
                "Mike Massimino, a former NASA astronaut, is a professor of Mechanical Engineering at Columbia University, and the senior advisor for space programs at the Intrepid Sea, Air, and Space Museum. He received his Bachelor of Science degree from Columbia and Master of Science degree in both Mechanical Engineering and Technology and Policy, as well as his Doctor of Philosophy degree in Mechanical Engineering from the Massachusetts Institute of Technology.",
                "After working as an engineer at IBM, NASA Headquarters and McDonnell Douglas Aerospace, along with academic appointments at both Rice University and the Georgia Institute of Technology, Massimino was selected as an astronaut candidate by NASA in 1996. A veteran of two space flights, the fourth and fifth Hubble Space Telescope servicing missions in 2002 and 2009, Massimino has many accomplishments including a team record for the number of hours spacewalking in a single space shuttle mission and the first person to tweet from Space with over 1.3 million twitter followers currently. He has also received a number of awards including two NASA &#147Space Flight Medals&#148, the NASA &#147Distinguished Service Medal&#148, and the American Astronautical Society&#146s 2009 &#147Flight Achievement Award&#148. He is also the holder of two patents and author of several engineering research papers. ",
                "Back at his alma mater, Columbia, Massimino is teaching an undergraduate course, Introduction to Human Space Flight, which harnesses his years of academic and professional experience. He is also working with The Art of Engineering, a course in which all first-year engineers attend design lectures and work on engineering projects with socially responsible themes. ",
                "When not in academia or at NASA, Massimino has made several television appearances including a recurring role as himself on the CBS hit comedy, The Big Bang Theory. In addition, he frequently appears in specials on Discovery, History, PBS and National Geographic Channels, along with national and cable news. He has also been a guest on many of the late night talk shows including The Late Show with David Letterman and The Late Late Show with Craig Ferguson. ",
                "Massimino is author of Spaceman: An Astronaut's Unlikely Journey to Unlock the Secrets of the Universe (October 2016), where he tells the inspirational, unlikely, and often humorous story of his 18 years at NASA, including his four spacewalks to service the Hubble Space Telescope and his public relations work in telling the story of space. Massimino&#146s account gives readers a first-hand look at the incredible legacy of the Hubble and the modern history of space travel in the final years of the shuttle era, including the tragedy of the 2003 Columbia disaster. It also offers an insider&#146s take on the storied past and exciting future of manned space flight."
              ],
              "day": "Saturday"
            },
            "mcelroy": {
              "key": "mcelroy",
              "name": "John McElroy",
              "org": "",
              "title": "Conference Moderator, Host of Autoline",
              "img": "mcelroy.jpg",
              "bio": [
                "John McElroy is the host of &#147Autoline Daily&#148 the first industry webcast of industry news and analysis. He is also the host of the television program &#147Autoline This Week,&#148 an Emmy Award-winning, weekly half-hour discussion program featuring top automotive executives and journalists. McElroy also hosts &#147Autoline After Hours,&#148 the first regularly scheduled live webcast about the industry. The shows can be seen online at www.autolinedetroit.tv  McElroy also broadcasts five radio segments daily on WWJ Newsradio 950, the CBS affiliate in Detroit. He writes a monthly op-ed article for Ward&#146s Auto World.",
                "His past experience includes five years as Detroit Editor for Road & Track, and as the American correspondent for World Cars, which was published by the Automotive Club of Italy. He was also invited to write the annual automotive entry for the Encyclopedia Britannica Yearbook. He spent most of his career at the trade magazine Automotive Industries where he ultimately rose to Editorial Director. McElroy was inducted into the Michigan Journalism Hall of Fame in 2018."
              ],
              "day": "Friday"
            },
            "murphy": {
              "key": "murphy",
              "name": "John J. Murphy, CPA",
              "org": "Bank of America Merrill Lynch ",
              "title": "Managing Director/Leas U.S. Auto Analyst",
              "img": "murphy.jpg",
              "bio": [
                "John Murphy is a managing director and the lead US Auto analyst in Equity Research. He advises clients on investments in automobile manufacturers, suppliers, dealers and related businesses. Key pillars of his research portfolio include: Car Wars, Who Makes the Car, the Dealer Manual, the Big Bang Series, and the Annual New York Auto Summit. ",
                "He has earned high rankings in industry surveys, including the Institutional Investor All America Research Team, the Wall Street Journal Best on the Street, the Financial Times/Starmine World&#146s Top Analysts, and Bloomberg Markets World&#146s Top Analysts. ",
                "Murphy has presented to numerous boards and senior management across the automotive value chain. He has also addressed a number of industry conferences including: the Automotive News World Congress, the Original Equipment Suppliers Annual Conference, the World Economic Forum Automotive Industry Sessions, the National Automobile Dealers Association Symposium, the Federal Reserve Bank of Chicago&#146s Automotive Outlook Symposium, and many others. ",
                "He joined the Merrill Lynch Auto group in 1999. Prior to that, Murphy worked at the National Economic Research Associates (NERA) in the banking and finance practice. ",
                "He has a BA in quantitative economics from Tufts University, and is a CFA charter holder."
              ],
              "day": "Friday"
            },
            "ravi": {
              "key": "ravi",
              "name": "Sanjay Ravi",
              "org": "Microsoft",
              "title": "General Manager, Automotive Industry",
              "img": "ravi.jpg",
              "bio": [
                "Sanjay Ravi is responsible for the development of Microsoft&#146s global Automotive industry business. He leads the team that supports vehicle manufacturers and mobility service providers including their suppliers and ecosystem partners with innovative solutions and services strategies that accelerate digital transformation. Leveraging the breadth and depth of Microsoft technologies along with partner solutions, Ravi&#146s team guides the growth and competitive strategies for Microsoft in the following areas: connected vehicles, autonomous vehicle development, smart mobility solutions, connected customer experiences and smart factory & supply chain. Ravi and his team are focused on partnering with automakers to bring new digital capabilities and monetization opportunities to the Automotive market quickly.",
                "Ravi holds a bachelor&#146s degree in Mechanical Engineering from the Indian Institute of Technology (I.I.T.) Madras and a Master of Science degree in Manufacturing Systems from Syracuse University. He is a graduate of the Harvard Business School General Management Program."
              ],
              "day": "Saturday"
            },
            "reed": {
              "key": "reed",
              "name": "Chris Reed",
              "org": "Nissan North America, Inc. ",
              "title": "Senior Vice President, R&D Americas",
              "img": "reed.jpg",
              "bio": [
                "Chris Reed is senior vice president, Research and Development, Nissan Technical Center North America (NTCNA), a position to which he was appointed in April 2019. In this role he is responsible for all vehicle engineering and development operations in North America.",
                "Previously, Reed was vice president, Platform and Technology Engineering, where he was responsible for Powertrain, Electrical, and Audio/IT engineering groups. He also served as the Overseas Chief Vehicle Engineer (OCVE) for Nissan LEAF, Murano and Pathfinder as well as the INFINITI QX60, at NTCNA.",
                "Reed joined Nissan North America in 1988 as an entry-level engineer in the body design group. From 2011 to 2013, he worked in safety and then exterior/accessories while being OCVE of trucks. He also spent more than two years in Japan to help lead development on an all-new Nissan Murano. From 1999 to 2007, Reed was self-employed as a home builder and ran a small automotive parts supplier.",
                "Reed holds a mechanical engineering degree from Virginia Tech. He is based at NTCNA in Farmington Hills, Michigan."
              ],
              "day": "Friday"
            },
            "rocker": {
              "key": "rocker",
              "name": "Ingeborg Rocker ",
              "org": "Dassault Systèmes",
              "title": "Vice President Strategy & Digital Transformation Cross-Industry Initiatives",
              "img": "rocker.jpg",
              "bio": [
                "German architect and urban designer Ingeborg Rocker joined Dassault Systèmes in 2014 as the Vice President of 3DEXPERIENCity and has been responsible for developing the Dassault Systèmes vision and strategy for modeling and simulating our planet, with a particular focus on urban settlements. 3DEXPERIENCity proposes the ‘Operational Twin&#146 as a virtual equivalent of the city, along with its systems and facilities – offering a virtual version of the real-time condition of the city – linking design and run in continuous feedback loops intrinsically with one another. ",
                "In 2015 Ingeborg also joined the Dassault Systèmes Corporate Strategy Team with a focus on developing new business visions and opportunities worldwide.",
                "Since 2017, Ingeborg has been named Dassault Systèmes VP for Strategy and Digital Transformation of the Cross Industry Teams focusing on the following disciplines:  Materials, IoT/IoE, Cobots + Robots, Cyberphysical Systems, Value Chain and City.",
                "Most recently, Since 2019 Ingeborg is VP for Industry Innovation at Dassault Systèmes, developing the latest Cross Industry and Brand Innovations for the company.",
                "Prior to joining Dassault Systèmes, Ingeborg worked for 9 years as a Professor of Architecture at Harvard University where she taught Architectural and Urban Design and gave courses and seminars in the theory sequence. She received her PhD from Princeton University in 2010, her Master of Art from Princeton University in 2003, her Master of Science in Advanced Architectural Design from Columbia University in 1996 and her Diploma in Architecture from the RTWH Aachen, Germany in 1995. She has taught at Columbia University, Princeton University, the University of Pennsylvania, and Harvard University, and has worked with internationally renowned architects and urban planners.",
                "Ingeborg has published and lectured internationally, and publications regarding her work at Dassault Systèmes have been featured in several newspapers, magazines, and by the BBC. "
              ],
              "day": "Saturday"
            },
            "smiley": {
              "key": "smiley",
              "name": "Carl Smiley",
              "org": "FCA US LLC ",
              "title": "Chief Purchasing & Supply Chain Officer ",
              "img": "smiley.jpg",
              "bio": [],
              "day": "Saturday"
            },
            "thomas": {
              "key": "thomas",
              "name": "Charles Thomas",
              "org": "General Motors",
              "title": "Chief Data & Analytics Officer",
              "img": "thomas.jpg",
              "bio": [],
              "day": "Friday"
            },
            "tullman": {
              "key": "tullman",
              "name": "Howard Tullman",
              "org": "Ed Kaplan Family Institute for Innovation and Tech Entrepreneurship",
              "title": "Executive Director",
              "img": "tullman.jpg",
              "bio": [
                "Howard A. Tullman is the Executive Director of the Ed Kaplan Family Institute for Innovation and Tech Entrepreneurship at the Illinois Institute of Technology. Tullman is the former CEO of 1871 – where digital startups get their start and the General Managing Partner of G2T3V, LLC and of Chicago High Tech Investment Partners, which are Chicago-based early-stage venture funds. He is a member of Mayor Emanuel&#146s Chicago NEXT and Cultural Affairs Councils; the Innovate Illinois Advisory and Arts Councils; an Adjunct Professor at Kellogg; and an advisor to many start-ups. He is the former CEO of Tribeca Flashpoint College and Kendall College. Over the last 50 years, he has successfully founded more than a dozen high-tech companies."
              ],
              "day": "Saturday"
            },
            "wilson": {
              "key": "wilson",
              "name": "Mark Wilson, PhD",
              "org": "Michigan State University",
              "title": "Professor of Urban and Regional Planning, School of Planning, Design and Construction",
              "img": "wilson.jpg",
              "bio": [
                "Mark Wilson is Professor of Urban and Regional Planning, and co-founder of the Autonomous Futures research group, in the School of Planning, Design and Construction at Michigan State University.  His academic background focused on economics and regional science with his PhD from the University of Pennsylvania.  Research and teaching interests address urban planning, disruptive technologies, mega-events, and economic development.  Current projects include the urban implications of autonomous technologies; the role of innovation, knowledge and information technology in urban development; and mega-event planning for world&#146s fairs and Olympics."
              ],
              "day": "Saturday"
            }
          }
        }
      }
    },
    content: [{
      "ctl": "divider",
      "name": "title",
      "text": "Speakers",
      "size": "medium",
      "color": "black"
    },
      {
        "ctl": "message",
        "name": "title-msg",
        "text": "Come hear .... [pending text] ... 2019 Speakers",
        "size": "large",
        "color": "blue"
      },
      
      {
        "ctl": "cards",
        "name": "main-cards",
        classes: "centered section ",
        attr: {
          "pagespot":"cards-area"
        },
        "slim": true,
        "link": true,
        "content": [
          {
          ctl: "title",
          size: "medium",
          color: "blue",
          classes: "center aligned",
          text: "Friday, October 11th"
        },
        {
          ctl: "spot",
          name: "Friday", 
          content: []
        },
        {
          ctl: "title",
          size: "medium",
          color: "blue",
          classes: "center aligned",
          text: "Saturday, October 12th"
        },
        {
          ctl: "spot",
          name: "Saturday", 
          content: []
        }]
      }]
  };

  var ControlCode = {};

  ControlCode._onPreInit = function(){
    this.setup({type: ""});
  };
  
  ControlCode.setup = setup;
  function setup(theOptions) {
    var tmpOptions = theOptions || {};
    
     
     this.titleEntry = this.getItemSpecs('title');
     var tmpSpkDetails = this.getConfig().options.customData.speakerDetails;
     this.cardsEntry = this.getItemSpecs('main-cards');
  
     //--- clear existing just in case
     //this.cardsEntry.content = [];
     var tmpTitle = "2019 Speakers";
     var tmpOrderNode = 'order';
     if( tmpOptions.type == 'lunch'){
       tmpOrderNode = 'lunch';
       tmpTitle = "Leadership Lunch Conversations";
     } else {
       this.cardsEntry.content = [];
     }
     
     this.titleEntry = tmpTitle;
     
     for( var iPos in tmpSpkDetails[tmpOrderNode] ){
       var tmpKey = tmpSpkDetails[tmpOrderNode][iPos];
       var tmpDetails = tmpSpkDetails.index[tmpKey];
       var tmpDesc = tmpDetails.title || '';
       var tmpOrg = tmpDetails.org || '';
       if( tmpOrg ){
         if( tmpDesc ){
           tmpDesc += ' - ';
         }
         tmpDesc += tmpOrg;
       }
       
       var tmpNewCard = {
          "ctl": "cardfull",
          "classes": "orange raised tall",
          onClick: {
            run: "action", 
            action: "showDetails",
            details: tmpDetails,
            key: tmpDetails.key,
            source: "page"
          },
          "name": tmpDetails.key,
          "header": tmpDetails.name,
          "imageSrc": "./res/" + tmpDetails.img + "",
          "meta": "<a>" + tmpDetails.day + "</a>",
          "description": tmpDesc
        };
       var tmpEntry = this.getItemSpecs(tmpDetails.day);
       tmpEntry.content.push(tmpNewCard);
     }
     
    // this.cardsEntry.content = [{
    //       "ctl": "cardfull",
    //       "classes": "orange raised tall",
    //       "name": "baumbick",
    //       "header": "Jim Baumbick",
    //       "imageSrc": "./res/baumbick.jpg",
    //       "meta": "<a>Friday</a>",
    //       "description": "Vice President, Enterprise Product Line Management, Strategy & Planning - Ford Motor Company"
    //     },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-carl-camden",
    //         "header": "Carl Camden",
    //         "imageSrc": "./res/spk/CamdenCarl.jpg",
    //         "meta": "<a>Friday and Saturday</a>",
    //         "description": "President, IPSE - U.S., The Association of Independent Workers"
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-john-daymone",
    //         "header": "Daymond John",
    //         "imageSrc": "./res/spk/JohnDaymond.jpg",
    //         "meta": "<a>Saturday and Discussions</a>",
    //         "description": "Founder and CEO of FUBU; Star of ABC’s Shark Tank; CEO of Shark Branding and New York Times Best-Selling Author"
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-jim-kam",
    //         "header": "James Kamsickas",
    //         "imageSrc": "./res/spk/JimKamsickas.jpg",
    //         "meta": "<a>Friday</a>",
    //         "description": "President and Chief Executive Officer, Dana Incorporated"
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-rob-k",
    //         "header": "Robert H. Kurnick, Jr.",
    //         "imageSrc": "./res/spk/RobKurnick.jpg",
    //         "meta": "<a>Friday</a>",
    //         "description": "Vice Chairman, Penske Corporation and President, Penske Automotive Group, Inc."
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-gerd-l",
    //         "header": "Gerd Leonhard",
    //         "imageSrc": "./res/spk/GerdLeonhard.jpg",
    //         "meta": "<a>Saturday</a>",
    //         "description": "Futurist, Visionary Thinker and Author"
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-mike-man",
    //         "header": "Mike Mansuetti",
    //         "imageSrc": "./res/spk/MikeMansuetti.jpg",
    //         "meta": "<a>Saturday</a>",
    //         "description": "President, North America, Bosch"
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-amity-m",
    //         "header": "Amity Millhiser",
    //         "imageSrc": "./res/spk/AmityMillhiser.jpg",
    //         "meta": "<a>Friday</a>",
    //         "description": "Vice Chair and Chief Clients Officer PwC US"
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-karl-n",
    //         "header": "Karl-Thomas Neumann",
    //         "imageSrc": "./res/spk/KarlThomasNeumann.jpg",
    //         "meta": "<a>Friday</a>",
    //         "description": "In Charge of Mobility, EVELOZCITY"
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-bryan-riemer",
    //         "header": "Bryan Reimer, Ph.D.",
    //         "imageSrc": "./res/spk/BryanReimer.jpg",
    //         "meta": "<a>Friday</a>",
    //         "description": "Research Scientist, MIT AgeLab and Associate Director, The New England University Transportation Center, MIT"
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-ken-washington",
    //         "header": "Dr. Ken Washington",
    //         "imageSrc": "./res/spk/KenWashington.jpg",
    //         "meta": "<a>Saturday</a>",
    //         "description": "Vice President, Research and Advanced Engineering and Chief Technology Officer, Ford Motor Company"
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-kathy-winter",
    //         "header": "Kathy Winter",
    //         "imageSrc": "./res/spk/KathyWinter.jpg",
    //         "meta": "<a>dayyyyyyy</a>",
    //         "description": "Vice President and General Manager, Autonomous Driving Solutions Division, Intel"
    //       },
    //       {
    //         "ctl": "cardfull",
    //         "classes": "orange raised tall",
    //         "name": "card-john-mcelroy",
    //         "header": "John McElroy",
    //         "imageSrc": "./res/spk/JohnMcElroy.jpg",
    //         "meta": "<a>Conference Moderator</a>",
    //         "description": "Host of Autoline"
    //       }]
  }


  var ThisControl = {
    specs: ControlSpecs, options: {
      proto: ControlCode, parent: ThisApp
    }};
  return ThisControl;
})(ActionAppCore, $);