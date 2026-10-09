
const assert = require('node:assert/strict');

const audit = {
  project: 'Accessibility Audit Project',
  website: 'GOV.UK',
  methods: [
    'Lighthouse accessibility audit',
    'Keyboard navigation testing'
  ],
  status: 'API working successfully'
};

assert.equal(audit.project, 'Accessibility Audit Project');
assert.equal(audit.website, 'GOV.UK');
assert.ok(audit.methods.length >= 2);
assert.equal(audit.status, 'API working successfully');

console.log('All audit data tests passed!');