const messages = {
	en: {
		translations: {
			chooseLanguageBar: {
				titlePT: "Portuguese",
				titleEN: "English",
			},
			header: {
				headerHomeLink: "Home",
				headerProjectsLink: "Projects",
				headerExperienceLink: "Experience",
				headerContactLink: "Contact",
				headerAboutLink: "About",
			},
			//HOME PAGE TRANSLATION
			homePageTabTitle: "Home - ",

			homePageTitles: {
				pt1: "Hi! I'm ",
				pt2: "Bruno",
				pt3: "Your frontend developer.",
			},
			homePageDescription: {
				text: "I enjoy developing robust frontend products, delivering exceptional user experiences.",
			},
			homePageButtons: {
				homePageToProject: "Projects",
				homePageToAbout: "More about me",
			},
			navBarComponent: {
				navLinkHome: "Home",
				navLinkProjects: "Projects",
				navLinkExperience: "Experience",
				navLinkContact: "Contact",
				navLinkAbout: "About",
				changeThemeBtnPt1: "Change to ",
				changeThemeBtnPt2: " theme",
			},
			//PROJECTS PAGE TRANSLATION
			projectsPageTabTitle: "Projects - ",

			projectsPage: {
				title: "A selection of my favorite works.",
				coockedDescription:
					"Cooked is a recipe website, that allows you to search, and find out how your favorite recipe is done.",
				stockPhotosDescription:
					"A place for you to find and download free photos and images, taken from people for all over the wolrd.",
				stockExchangeDescription:
					"A plataform to search and compare revenue, expenses, profit and EBITDA from the selected company, using graphics.",
				madeUsing: "Developed using: ",
				visitProject: "Visit ",
				altText: "Photo showing the project: ",
			},
			//EXPERIENCE PAGE TRANSLATION
			experienceTabTitle: "Experience - ",

			experiencePage: {
				title: "Work Experience.",
				companys: [
					{
						company: "Martinelli Tech",
						jobTitle: "Frontend Developer",
						description:
							"Contributing to the evolution of tax and fiscal systems, focusing on performance optimization and adapting platforms to better meet user demands. I consistently sought solutions to streamline processes and enhance efficiency while ensuring the integrity and usability of interfaces. Beyond development, I participated in strategic decisions to improve the product and actively collaborated with the team, sharing knowledge and assisting in solving technical challenges—always aiming to ensure compliance, security, and efficiency in fiscal processes.",
						techs: [
							"Angular 19",
							"Git",
							"Azure DevOps",
							"Syncfusion",
							"Bootstrap",
							"SASS",
							"Srum",
						],
						years: ["Fevereiro/2024 - Present"],
					},
					{
						company: "Trell",
						jobTitle: "Developer",
						description:
							"Working in e-commerce specializing in anti-theft truck parts. Responsible for the ongoing maintenance and support of the website, ensuring optimal functionality and user experience. I collaborate on implementing features to enhance the interface, streamline navigation, and boost conversions. Committed to maintaining the system’s security and integrity.",
						techs: ["WordPress", "Elementor", "WooCommerce"],
						years: ["April/2023 - February/2024"],
					},
					{
						company: "1WorldSyncBR",
						jobTitle: "Junior Developer",
						description:
							"For the retail segment, the developer had the duty to always deliver the best quality information and images, in relation to the product, which will later be used by the final client. With good practices, clean codes and easy maintenance. Contact with internal and external customers through voice and video calls, mostly in English due to the wide variety of people from outside the country involved in the projects.",
						techs: [
							"AngularJs",
							"Angular 11+",
							"AWS",
							"Git",
							"Java",
							"Jira (Atlassian)",
						],
						years: ["May/2021 - August/2021"],
					},
					{
						company: "Opentech Logistics and Risk Management Solutions",
						jobTitle: "Junior Developer",
						description:
							"Development of solutions for the risk management and vehicle tracking segment. Working with maintenance of the logistics system for the company, creating new pages and functionalities for the end user. Applying concepts of mobile first and great UX design. Started in a legacy system, using jQuery and bootstrap as main tools, and later changed to the main product, using React.",
						techs: [
							"Bootstrap",
							"C#",
							"Git",
							"Jira (Atlassian)",
							"jQuery",
							"NodeJS",
							"React",
							"Sass",
							"SQL Server",
							"Scrum",
						],
						years: ["November/2020 - April/2021"],
					},
					{
						company: "Opentech Logistics and Risk Management Solutions",
						jobTitle: "Process Assistant",
						description:
							"Used a frontend platform, automating processes of the tracking and registration areas of the company. Direct contact with internal and external customers by e-mail for alignment of business rules.",
						techs: [
							"BOT",
							"Flowcharts",
							"Kanban",
							"SQL SERVER",
							"Workflow",
							"XML",
						],
						years: ["May/2019 - November/2020"],
					},
				],
			},
			//CONTACT PAGE TRANSLATION
			contactPageTabTitle: "Contact - ",

			contactPage: {
				title: "Contact me.",
				contacts: {
					name: "Name",
					email: "Email",
				},
				emailInfo: {
					subject: "Subject",
					message: "Message",
				},
				sendMessageBtn: "Send message!",

				modalFieldsError: {
					title: "Oops...",
					text: "Please fill in all black fields!",
					button: "Ok",
				},

				modalEmailError: {
					title: "Oops...",
					text: "A wild error appears!",
					errorType: "Error: ",
					button: "Ok",
				},

				modalEmailSent: {
					title: "Email sent!",
					text: "Thank you for making contact! We'll talk soon!",
					button: "Ok",
				},
			},

			//ABOUT PAGE TRANSLATION
			aboutPageTabTitle: "About - ",

			aboutPage: {
				title: "Here's my story.",
				introInfo: {
					pt1: "I'm Bruno, a developer & ",
					pt2: "creative coder ",
					pt3: "who specializes in frontend development. My mission is to translate user-focussed designs into beautiful websites or applications.",
					pt4: " I'm also a photographer and musician in my spare time, and I take it as a hobby and a way to express myself or how I see the world.",
					pt5: "I'm currently looking for an oportunity to use my knoledge and experience to help the user and the team I'll be a part of.",
				},
				contentInfo: {
					altTextImg: "A photograph of my tattoer, tattoing in his studio.",
					imgSubtitle: "A photo taken by me.",
					pt1: "In my last experience, I worked as a junior full-stack developer for the retail and product segment at ",
					pt2: "1WorldSyncBR",
					pt3: ". Where I helped to maintain, and create new functionalities to the main product, that consists in a plataform that provides content solutions for products.",
					pt4: "Before ",
					pt5: "1WorldSyncBR",
					pt6: ", I worked at ",
					pt7: "Opentech",
					pt8: ". First, as a process assistant automating decision-making processes of the truck tracking system. And later on, I became a junior frontend developer, helping to give maintenance to the logistic system the comapany uses.",
					pt9: "You can find me on ",
					pt10: "Linkedin",
					pt11: " , where I keep all my professional data up to date, and where I share and update projects. You can also follow me on ",
					pt12: "GitHub",
					pt13: ", or you can contact me ",
					pt14: "here.",
					pt15: "See all my journey ",
					pt16: "here",
				},
			},
			//404 PAGE
			pageNotFoundTabTitle: "404 - Page not found.",
			pageNotFound: {
				title: "404!",
				errorName: "Page not found.",
				message: "The page you're looking for dosen't exist.",
				goBackMessage: "Go back to ",
				linkToHome: "home page.",
				followMeText: "You can also follow me on: ",
			},
		},
	},
};

export { messages };
