# series-homework
# SeriesHub Homework

This project contains JavaScript functions for working with SeriesHub series data stored in a JSON file.

## How to run

Run the tests with:

```bash
node check.js
```

The expected result is:

```text
Passed: 15 / 15
```

## Questions

### 1. Why do we need to copy nested arrays/objects in `addEpisode`?

Because copying only the main object does not copy the objects and arrays inside it. If we change the nested `episodes` array, we can accidentally change the original data too. Therefore, we create new copies of the nested objects and arrays.

### 2. Why didn't `{ ...show }` help in bug #3?

`{ ...show }` only creates a new copy of the `show` object. The `seasons` array and the `episodes` array are still connected to the original show. When we use `push()`, we change the original data. We need to create new copies of the nested arrays as well.