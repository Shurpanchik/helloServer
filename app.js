/*-----------------------------------------------------------------------------
A simple "Hello World" bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify  = require('restify');
var builder  = require('botbuilder');


//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8888, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
    appId: 'cc4c2816-902d-41af-86c8-f9e3fa26ccd5',
    appPassword: 'QG3nqCFWbzgBN68eKcdTLEq'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//=========================================================
// Dialogen
//=========================================================
/*
bot.dialog('/', function (session) {
	builder.Prompts.choice(session,"Choose time","09:00|10:00|11:00|12:00|13:00|14:00|15:00|16:00|17:00|18:00|19:00|20:00" , {
		listStyle: builder.ListStyle.button,
	});
});*/
