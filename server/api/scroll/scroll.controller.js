'use strict';

var _ = require('lodash');
var Scroll = require('./scroll.model');

// Get list of scrolls
exports.index = function(req, res) {
  Scroll.find(function (err, scrolls) {
    if(err) { return handleError(res, err); }
    return res.json(200, scrolls);
  });
};

// Get a single scroll
exports.show = function(req, res) {
  Scroll.findById(req.params.id, function (err, scroll) {
    if(err) { return handleError(res, err); }
    if(!scroll) { return res.send(404); }
    return res.json(scroll);
  });
};

// Creates a new scroll in the DB.
exports.create = function(req, res) {
  Scroll.create(req.body, function(err, scroll) {
    if(err) { return handleError(res, err); }
    return res.json(201, scroll);
  });
};

// Updates an existing scroll in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Scroll.findById(req.params.id, function (err, scroll) {
    if (err) { return handleError(res, err); }
    if(!scroll) { return res.send(404); }
    var updated = _.merge(scroll, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, scroll);
    });
  });
};

// Deletes a scroll from the DB.
exports.destroy = function(req, res) {
  Scroll.findById(req.params.id, function (err, scroll) {
    if(err) { return handleError(res, err); }
    if(!scroll) { return res.send(404); }
    scroll.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}