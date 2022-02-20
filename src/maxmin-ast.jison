%{
const { buildLiteral, buildRoot, buildMin } = require('./ast-build');
%}


%%
es: e {  /* Return the whole AST */ }
;

e: 
   /* Fill the parser */
;