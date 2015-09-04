
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (wasteBoxDwr == null) var wasteBoxDwr = {};
wasteBoxDwr._path = '/dwr';
wasteBoxDwr.suspendFlow = function(p0, p1, p2, p3, p4, p5, callback) {
  dwr.engine._execute(wasteBoxDwr._path, 'wasteBoxDwr', 'suspendFlow', p0, p1, p2, p3, p4, p5, callback);
}
wasteBoxDwr.updateDelFlag = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(wasteBoxDwr._path, 'wasteBoxDwr', 'updateDelFlag', p0, p1, p2, p3, callback);
}
wasteBoxDwr.deleteArchivesAction = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(wasteBoxDwr._path, 'wasteBoxDwr', 'deleteArchivesAction', p0, p1, p2, p3, callback);
}
