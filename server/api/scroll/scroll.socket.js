/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Scroll = require('./scroll.model');

exports.register = function(socket) {
  Scroll.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Scroll.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('scroll:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('scroll:remove', doc);
}