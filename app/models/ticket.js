import DS from 'ember-data';

export default DS.Model.extend({
	status : DS.attr('string'),
	createdDateTime : DS.attr('string'),
	serviceOrder : DS.belongsTo('serviceOrder')
});
