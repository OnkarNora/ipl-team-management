const tempSubmit = (e) => {
	e.preventDefault();

	const data = [{
		'name': 'Geri Bodell',
		'age': 26,
		'nationality': 'USA',
		'role': 'wicket keeper',
		'team_id': '1673418963117'
	}, {
		'name': 'Rodina Pulman',
		'age': 30,
		'nationality': 'Australia',
		'role': 'Bowler',
		'team_id': '1673418963117'
	}, {
		'name': 'Francklyn Gartell',
		'age': 34,
		'nationality': 'Pakistan',
		'role': 'Bowler',
		'team_id': ''
	}, {
		'name': 'Dorisa Culpen',
		'age': 25,
		'nationality': 'Pakistan',
		'role': 'Captain',
		'team_id': '1673418937061'
	}, {
		'name': 'Nester Oxtiby',
		'age': 30,
		'nationality': 'USA',
		'role': 'wicket keeper',
		'team_id': ''
	}, {
		'name': 'Eula Fridd',
		'age': 28,
		'nationality': 'Pakistan',
		'role': 'All Rounder',
		'team_id': '1673418963117'
	}, {
		'name': 'Ange Yosselevitch',
		'age': 32,
		'nationality': 'Pakistan',
		'role': 'Batsman',
		'team_id': '1673418990701'
	}, {
		'name': 'Clementine Dunnan',
		'age': 22,
		'nationality': 'Pakistan',
		'role': 'Bowler',
		'team_id': '1673418990701'
	}, {
		'name': 'Lita Ryal',
		'age': 23,
		'nationality': 'Pakistan',
		'role': 'All Rounder',
		'team_id': '1673419243451'
	}, {
		'name': 'Gertrud Willder',
		'age': 27,
		'nationality': 'New zealand',
		'role': 'wicket keeper',
		'team_id': '1673419001445'
	}, {
		'name': 'Nita Thurbon',
		'age': 22,
		'nationality': 'Australia',
		'role': 'All Rounder',
		'team_id': '1673418963117'
	}, {
		'name': 'Mickie Feldstern',
		'age': 34,
		'nationality': 'India',
		'role': 'Bowler',
		'team_id': '1673418963117'
	}, {
		'name': 'Marcie Huzzay',
		'age': 39,
		'nationality': 'India',
		'role': 'Captain',
		'team_id': '1673418963117'
	}, {
		'name': 'Randi MacConchie',
		'age': 35,
		'nationality': 'Australia',
		'role': 'wicket keeper',
		'team_id': '1673418937061'
	}, {
		'name': 'Evaleen Shatliff',
		'age': 32,
		'nationality': 'Australia',
		'role': 'Bowler',
		'team_id': '1673419001445'
	}, {
		'name': 'Urbain Didball',
		'age': 22,
		'nationality': 'UAE',
		'role': 'Bowler',
		'team_id': '1673419014916'
	}, {
		'name': 'Irena Wettern',
		'age': 24,
		'nationality': 'Australia',
		'role': 'wicket keeper',
		'team_id': '1673418990701'
	}, {
		'name': 'Taylor Bryers',
		'age': 31,
		'nationality': 'UAE',
		'role': 'Captain',
		'team_id': '1673418963117'
	}, {
		'name': 'Maxi Gilder',
		'age': 20,
		'nationality': 'UAE',
		'role': 'All Rounder',
		'team_id': '1673418963117'
	}, {
		'name': 'Arabele Labitt',
		'age': 40,
		'nationality': 'UAE',
		'role': 'wicket keeper',
		'team_id': '1673418963117'
	}, {
		'name': 'Nonie Carless',
		'age': 21,
		'nationality': 'Bangladesh',
		'role': 'wicket keeper',
		'team_id': ''
	}, {
		'name': 'Venus Cavaney',
		'age': 26,
		'nationality': 'New zealand',
		'role': 'Captain',
		'team_id': '1673419001445'
	}, {
		'name': 'Hewie McKirdy',
		'age': 26,
		'nationality': 'USA',
		'role': 'Captain',
		'team_id': '1673418937061'
	}, {
		'name': 'Isa Radford',
		'age': 24,
		'nationality': 'Pakistan',
		'role': 'Captain',
		'team_id': '1673419243451'
	}, {
		'name': 'Melinda Croci',
		'age': 36,
		'nationality': 'Australia',
		'role': 'All Rounder',
		'team_id': '1673418990701'
	}, {
		'name': 'Charlotte Barendtsen',
		'age': 26,
		'nationality': 'Australia',
		'role': 'Bowler',
		'team_id': '1673418990701'
	}, {
		'name': 'Fanny Jessop',
		'age': 36,
		'nationality': 'USA',
		'role': 'Bowler',
		'team_id': '1673418990701'
	}, {
		'name': 'Jule Jansema',
		'age': 24,
		'nationality': 'India',
		'role': 'Batsman',
		'team_id': '1673419001445'
	}, {
		'name': 'Orella Dilloway',
		'age': 29,
		'nationality': 'Pakistan',
		'role': 'Captain',
		'team_id': '1673418937061'
	}, {
		'name': 'Phaedra Gallaway',
		'age': 24,
		'nationality': 'Pakistan',
		'role': 'Bowler',
		'team_id': '1673418990701'
	}, {
		'name': 'Clyve Wolfers',
		'age': 36,
		'nationality': 'Bangladesh',
		'role': 'wicket keeper',
		'team_id': '1673419014916'
	}, {
		'name': 'Cora Iacobini',
		'age': 26,
		'nationality': 'India',
		'role': 'Batsman',
		'team_id': '1673418937061'
	}, {
		'name': 'Robers Silverton',
		'age': 26,
		'nationality': 'Bangladesh',
		'role': 'Batsman',
		'team_id': '1673419014916'
	}, {
		'name': 'Bonnibelle Van Brug',
		'age': 39,
		'nationality': 'UAE',
		'role': 'Batsman',
		'team_id': ''
	}, {
		'name': 'Gilli Fahy',
		'age': 30,
		'nationality': 'India',
		'role': 'wicket keeper',
		'team_id': '1673418990701'
	}, {
		'name': 'Samara Cockrem',
		'age': 38,
		'nationality': 'India',
		'role': 'Batsman',
		'team_id': '1673419014916'
	}, {
		'name': 'Neils Roumier',
		'age': 20,
		'nationality': 'Bangladesh',
		'role': 'wicket keeper',
		'team_id': '1673418963117'
	}, {
		'name': 'Edward Yarrell',
		'age': 26,
		'nationality': 'India',
		'role': 'Batsman',
		'team_id': '1673418990701'
	}, {
		'name': 'Addia Weeke',
		'age': 32,
		'nationality': 'Pakistan',
		'role': 'Bowler',
		'team_id': '1673419014916'
	}, {
		'name': 'Rosette Domniney',
		'age': 34,
		'nationality': 'UAE',
		'role': 'Captain',
		'team_id': '1673418937061'
	}, {
		'name': 'Germain Roffe',
		'age': 28,
		'nationality': 'India',
		'role': 'All Rounder',
		'team_id': '1673419001445'
	}, {
		'name': 'Ody McEntegart',
		'age': 35,
		'nationality': 'Pakistan',
		'role': 'Batsman',
		'team_id': '1673418963117'
	}, {
		'name': 'Gretal Yesenin',
		'age': 35,
		'nationality': 'Bangladesh',
		'role': 'wicket keeper',
		'team_id': '1673418963117'
	}, {
		'name': 'Codi Franckton',
		'age': 37,
		'nationality': 'India',
		'role': 'Bowler',
		'team_id': '1673419001445'
	}, {
		'name': 'Jemimah Haestier',
		'age': 39,
		'nationality': 'Australia',
		'role': 'All Rounder',
		'team_id': ''
	}, {
		'name': 'Maurits Loan',
		'age': 29,
		'nationality': 'Bangladesh',
		'role': 'Batsman',
		'team_id': '1673418990701'
	}, {
		'name': 'Weider McBryde',
		'age': 33,
		'nationality': 'Bangladesh',
		'role': 'Batsman',
		'team_id': '1673418937061'
	}, {
		'name': 'Genny Dalloway',
		'age': 30,
		'nationality': 'USA',
		'role': 'Bowler',
		'team_id': '1673418963117'
	}, {
		'name': 'Fabio Zanuciolii',
		'age': 36,
		'nationality': 'Pakistan',
		'role': 'Captain',
		'team_id': '1673419243451'
	}, {
		'name': 'Filide Sturgeon',
		'age': 25,
		'nationality': 'UAE',
		'role': 'Captain',
		'team_id': '1673419243451'
	}];
	data.forEach((val) => {
		dispatch(addPlayer(val));
	});
	alert('done brother');
};