module.exports = {
	apps : [
		{
			name : 'pileaf',
			script : 'bin/www.js',
			max_restarts : 5
		}
	]

	/*
	,

	deploy : {
		production : {
			user : 'pi',
			host : 'cedrictaschereau.info',
			ref : 'origin/master',
			repo : 'git@github.com:ctaschereau/pileaf.git',
			path : '/home/pi/pileaf',
			'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
		}
	}
	*/
};
