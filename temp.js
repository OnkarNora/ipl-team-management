const tempSubmit = (e) => {
	e.preventDefault();

	const data = [{
		'name': 'Noah Bellelli',
		'team_name': 'GT',
		'nationality': 'Australia',
		'role': 'all rounder',
		'age': 42
	}, {
		'name': 'Andrew Colten',
		'team_name': 'DC',
		'nationality': 'Pakistan',
		'role': 'bowler',
		'age': 26
	}, {
		'name': 'Henderson Spieck',
		'team_name': 'DC',
		'nationality': 'Bangladesh',
		'role': 'batsman',
		'age': 27
	}, {
		'name': 'Hastings Championnet',
		'team_name': 'GT',
		'nationality': 'Bangladesh',
		'role': 'all rounder',
		'age': 28
	}, {
		'name': 'Taryn Lakes',
		'team_name': 'RCB',
		'nationality': 'Bangladesh',
		'role': 'captain',
		'age': 24
	}, {
		'name': 'Bernice Clemmens',
		'team_name': 'CSK',
		'nationality': 'Pakistan',
		'role': 'bowler',
		'age': 31
	}, {
		'name': 'Harlen Laughlin',
		'team_name': 'LSB',
		'nationality': 'Pakistan',
		'role': 'captain',
		'age': 39
	}, {
		'name': 'Barbara O\'Grogane',
		'team_name': 'MI',
		'nationality': 'Pakistan',
		'role': 'batsman',
		'age': 40
	}, {
		'name': 'Corny Ramble',
		'team_name': '',
		'nationality': 'Bangladesh',
		'role': 'captain',
		'age': 27
	}, {
		'name': 'Davidson Aleksidze',
		'team_name': 'SRH',
		'nationality': 'Bangladesh',
		'role': 'wicket keeper',
		'age': 27
	}, {
		'name': 'Leonhard Andrzejczak',
		'team_name': 'LSB',
		'nationality': 'Pakistan',
		'role': 'wicket keeper',
		'age': 40
	}, {
		'name': 'Sophia Hudson',
		'team_name': 'CSK',
		'nationality': 'Australia',
		'role': 'vice captain',
		'age': 29
	}, {
		'name': 'Emmalyn Lindstrom',
		'team_name': '',
		'nationality': 'Bangladesh',
		'role': 'vice captain',
		'age': 34
	}, {
		'name': 'Lorri Bacop',
		'team_name': 'CSK',
		'nationality': 'Pakistan',
		'role': 'vice captain',
		'age': 32
	}, {
		'name': 'Niki Mc Gorley',
		'team_name': 'LSB',
		'nationality': 'Bangladesh',
		'role': 'bowler',
		'age': 30
	}, {
		'name': 'Lyndsie Ivanishin',
		'team_name': 'GT',
		'nationality': 'Pakistan',
		'role': 'all rounder',
		'age': 20
	}, {
		'name': 'Moses Shilliday',
		'team_name': 'MI',
		'nationality': 'Pakistan',
		'role': 'bowler',
		'age': 41
	}, {
		'name': 'Robbie Dilger',
		'team_name': 'DC',
		'nationality': 'Australia',
		'role': 'bowler',
		'age': 23
	}, {
		'name': 'Heriberto Bern',
		'team_name': 'CSK',
		'nationality': 'Pakistan',
		'role': 'captain',
		'age': 33
	}, {
		'name': 'Antone Batchley',
		'team_name': 'RCB',
		'nationality': 'Bangladesh',
		'role': 'bowler',
		'age': 26
	}, {
		'name': 'Ferris Brand',
		'team_name': 'RCB',
		'nationality': 'Pakistan',
		'role': 'captain',
		'age': 28
	}, {
		'name': 'Ivette Whorlow',
		'team_name': 'SRH',
		'nationality': 'Pakistan',
		'role': 'vice captain',
		'age': 39
	}, {
		'name': 'Kennan Charrisson',
		'team_name': 'DC',
		'nationality': 'Australia',
		'role': 'bowler',
		'age': 38
	}, {
		'name': 'Connie Layton',
		'team_name': 'SRH',
		'nationality': 'Pakistan',
		'role': 'vice captain',
		'age': 38
	}, {
		'name': 'Jane Bexley',
		'team_name': 'MI',
		'nationality': 'Pakistan',
		'role': 'batsman',
		'age': 42
	}, {
		'name': 'Emili Joutapavicius',
		'team_name': 'GT',
		'nationality': 'Pakistan',
		'role': 'bowler',
		'age': 30
	}, {
		'name': 'Den Casserley',
		'team_name': 'CSK',
		'nationality': 'Australia',
		'role': 'captain',
		'age': 34
	}, {
		'name': 'Barton Blackader',
		'team_name': 'DC',
		'nationality': 'Pakistan',
		'role': 'vice captain',
		'age': 39
	}, {
		'name': 'Winnifred Preator',
		'team_name': '',
		'nationality': 'Pakistan',
		'role': 'captain',
		'age': 38
	}, {
		'name': 'Trumaine Masdin',
		'team_name': 'SRH',
		'nationality': 'Pakistan',
		'role': 'bowler',
		'age': 40
	}, {
		'name': 'Rosana Tures',
		'team_name': 'DC',
		'nationality': 'Australia',
		'role': 'wicket keeper',
		'age': 28
	}, {
		'name': 'Cord Hovenden',
		'team_name': '',
		'nationality': 'Pakistan',
		'role': 'batsman',
		'age': 30
	}, {
		'name': 'Bondon Irving',
		'team_name': 'CSK',
		'nationality': 'Australia',
		'role': 'captain',
		'age': 42
	}, {
		'name': 'Luciana Rabat',
		'team_name': 'GT',
		'nationality': 'Pakistan',
		'role': 'captain',
		'age': 27
	}, {
		'name': 'Alberta Petruskevich',
		'team_name': 'MI',
		'nationality': 'Pakistan',
		'role': 'wicket keeper',
		'age': 37
	}, {
		'name': 'Barbe MacRorie',
		'team_name': 'MI',
		'nationality': 'Pakistan',
		'role': 'batsman',
		'age': 42
	}, {
		'name': 'Jozef Thewlis',
		'team_name': 'RCB',
		'nationality': 'Pakistan',
		'role': 'all rounder',
		'age': 27
	}, {
		'name': 'Fern Howarth',
		'team_name': 'MI',
		'nationality': 'Pakistan',
		'role': 'batsman',
		'age': 41
	}, {
		'name': 'Joanna McAllen',
		'team_name': 'SRH',
		'nationality': 'Bangladesh',
		'role': 'bowler',
		'age': 34
	}, {
		'name': 'Ramsey Cashell',
		'team_name': 'SRH',
		'nationality': 'Pakistan',
		'role': 'captain',
		'age': 32
	}, {
		'name': 'Orazio Grevatt',
		'team_name': 'RCB',
		'nationality': 'Bangladesh',
		'role': 'batsman',
		'age': 30
	}, {
		'name': 'Richard Lichtfoth',
		'team_name': 'RCB',
		'nationality': 'Pakistan',
		'role': 'batsman',
		'age': 28
	}, {
		'name': 'Darrel Timbridge',
		'team_name': 'SRH',
		'nationality': 'Bangladesh',
		'role': 'captain',
		'age': 42
	}, {
		'name': 'Pam Mussotti',
		'team_name': '',
		'nationality': 'Pakistan',
		'role': 'wicket keeper',
		'age': 38
	}, {
		'name': 'Rudolfo Rigts',
		'team_name': 'GT',
		'nationality': 'Pakistan',
		'role': 'bowler',
		'age': 24
	}, {
		'name': 'Fredra Brindle',
		'team_name': 'RCB',
		'nationality': 'Pakistan',
		'role': 'captain',
		'age': 34
	}, {
		'name': 'Mella Bridden',
		'team_name': 'MI',
		'nationality': 'Bangladesh',
		'role': 'batsman',
		'age': 41
	}, {
		'name': 'Nathalia Soares',
		'team_name': 'CSK',
		'nationality': 'Bangladesh',
		'role': 'all rounder',
		'age': 21
	}, {
		'name': 'Dominique McCrostie',
		'team_name': 'SRH',
		'nationality': 'Pakistan',
		'role': 'all rounder',
		'age': 29
	}, {
		'name': 'Cherilyn Klyner',
		'team_name': 'MI',
		'nationality': 'Bangladesh',
		'role': 'bowler',
		'age': 37
	}];
	data.forEach((val) => {
		dispatch(addPlayer(val));
	});
	alert('done brother');
};