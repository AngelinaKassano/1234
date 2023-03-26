<script context="module">
  export { a, b } from './B.Atletik';
  export { c as d } from './B.Atletik';
</script>

<script>
  export { d, e } from './B.Atletik';
  export { f as g } from './B.Atletik';
  let e = 123;
  let b = 234;
  function foo() {
    e = 456;
    b = 567;
  }
</script>

a: {typeof a}<br />
b: {typeof b}<br />
c: {typeof c}<br />
d: {typeof d}<br />
e: {typeof e}<br />
f: {typeof f}<br />
g: {typeof g}<br />