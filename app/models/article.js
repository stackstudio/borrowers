import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  description: DS.attr('string'),
  friend: DS.belongsTo('friend', { async: true }),
  state: DS.attr('string', {
    defaultValue: 'borrowed'
  }),
  notes: DS.attr('string')
});
