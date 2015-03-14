/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'WXYC 89.3  Chapel Hill NC',
    info : 'freeform student radio station at UNC',
    url: 'http://audio-mp3.ibiblio.org:8000/wxyc.mp3'
  },
  {
    name : 'WUOG 90.5  Athens GA',
    info : 'student radio station at UGA',
    url: 'http://wuogfm.serverroom.net:9076/;stream.mp3'
  }
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
