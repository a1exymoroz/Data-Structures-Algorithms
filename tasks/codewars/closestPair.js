// Calculate a pair of closest points in linearithmic time
function closestPair1(points) {
  let min;
  for (let i = 0; i < points.length - 1; i++) {
    const [a1, b1] = points[i];
    for (let k = i + 1; k < points.length; k++) {
      const [a2, b2] = points[k];
      const currentMin = Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2);
      if (!min || currentMin < min.value) {
        min = {
          value: currentMin,
          pair: [
            [a1, b1],
            [a2, b2],
          ],
        };
      }
    }
  }

  return min.pair;
}

function closestPair2(points) {
  const dist = ([a1, b1], [a2, b2]) => {
    return Math.sqrt((a1 - a2) ** 2 + (b1 - b2) ** 2);
  };

  const brutoForce = (p) => {
    let min = Infinity;
    let out;
    for (let i = 0; i < p.length - 1; i++) {
      for (let k = i + 1; k < p.length; k++) {
        const curMin = dist(p[i], p[k]);
        if (curMin < min) {
          min = curMin;
          out = [p[i], p[k], min];
        }
      }
    }
    return out;
  };

  const closestUntil = (xSorted, ySorted) => {
    if (xSorted.length === 2) {
      return [xSorted[0], xSorted[1], dist(xSorted[0], xSorted[1])];
    }

    if (xSorted.length === 3) {
      return brutoForce(xSorted);
    }

    const mid = Math.floor(xSorted.length / 2);
    const midPoint = xSorted[mid];

    const xSortedLeft = xSorted.slice(0, mid);
    const xSortedRight = xSorted.slice(mid);

    const ySortedLeft = [];
    const ySortedRight = [];

    ySorted.forEach((point) => {
      if (point[0] <= midPoint[0]) {
        ySortedLeft.push(point);
      } else {
        ySortedRight.push(point);
      }
    });

    const [p1Left, p2Left, deltaLeft] = closestUntil(xSortedLeft, ySortedLeft);
    const [pRight, p2Right, deltaRight] = closestUntil(
      xSortedRight,
      ySortedRight
    );

    let [p1, p2, delta] =
      deltaLeft < deltaRight
        ? [p1Left, p2Left, deltaLeft]
        : [pRight, p2Right, deltaRight];

    const inBand = ySorted.filter(
      (point) => midPoint[0] - delta < point[0] < midPoint[0] + delta
    );

    for (let i = 0; i < inBand.length; i++) {
      for (let j = i + 1; j < Math.min(i + 7, inBand.length); j++) {
        const d = dist(inBand[i], inBand[j]);
        if (d < delta) {
          [p1, p2, delta] = [inBand[i], inBand[j], d];
        }
      }
    }

    return [p1, p2, delta];
  };

  const closest = (P) => {
    P.sort(([x1], [x2]) => x1 - x2);
    const Q = [...P];
    Q.sort(([x1, y1], [_, y2]) => y1 - y2);
    return closestUntil(P, Q);
  };

  return closest(points);
}

function closestPair3(points) {
  const dist = ([a1, b1], [a2, b2]) => {
    return Math.sqrt((a1 - a2) ** 2 + (b1 - b2) ** 2);
  };

  const brutoForce = (p) => {
    let min = Infinity;
    let out;
    for (let i = 0; i < p.length - 1; i++) {
      for (let k = i + 1; k < p.length; k++) {
        const curMin = dist(p[i], p[k]);
        if (curMin < min) {
          min = curMin;
          out = [p[i], p[k], min];
        }
      }
    }
    return out;
  };

  const closestUntil = (points) => {
    if (points.length === 2) {
      return [points[0], points[1], dist(points[0], points[1])];
    }

    if (points.length === 3) {
      return brutoForce(points);
    }

    const midIndex = Math.floor(points.length / 2);
    const midPoint = points[midIndex];

    const leftPoints = points.slice(0, midIndex);
    const rightPoints = points.slice(midIndex);

    const [p1Left, p2Left, deltaLeft] = closestUntil(leftPoints);
    const [pRight, p2Right, deltaRight] = closestUntil(rightPoints);

    let [p1, p2, delta] =
      deltaLeft < deltaRight
        ? [p1Left, p2Left, deltaLeft]
        : [pRight, p2Right, deltaRight];

    let strip = [];

    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      if (Math.abs(point[0] - midPoint[0]) < delta) {
        strip.push(point);
      }
    }

    strip.sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < strip.length; i++) {
      console.log(delta);
      for (
        let j = i + 1;
        j < strip.length && strip[j][1] - strip[i][1] < delta;
        j++
      ) {
        const d = dist(strip[i], strip[j]);
        if (d < delta) {
          [p1, p2, delta] = [strip[i], strip[j], d];
        }
      }
    }

    return [p1, p2, delta];
  };

  const closest = (P) => {
    P.sort(([x1], [x2]) => x1 - x2);
    const Q = [...P];
    Q.sort(([, y1], [, y2]) => y1 - y2);
    return closestUntil(P, Q);
  };

  return closest(points);
}

var points = [
  [2, 2], // A
  [2, 8], // B
  [5, 5], // C
  [6, 3], // D
  [6, 7], // E
  [7, 4], // F
  [7, 9], // G
];

var result = closestPair3(points);
console.log(result);

// Test.assertSimilar(result[0], [6,3]);
// Test.assertSimilar(result[1], [7,4]);

// var points = [
//   [2, 2], // A
//   [2, 8], // B
// ];

// https://www.geeksforgeeks.org/closest-pair-of-points-using-divide-and-conquer-algorithm/
