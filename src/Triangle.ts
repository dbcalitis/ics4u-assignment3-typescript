/**
 * Triangle Class
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-29
 */

class Triangle {
  private readonly side1: number
  private readonly side2: number
  private readonly side3: number

  // the Triangle class constructor
  constructor(side1: number, side2: number, side3: number) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
  }

  // getters for sides
  public getSide1(): number {
    return this.side1
  }

  public getSide2(): number {
    return this.side2
  }

  public getSide3(): number {
    return this.side3
  }

  public getSides(): number[] {
    return [this.side1, this.side2, this.side3]
  }

  // isTriangleValid method - determines if the triangle is valid.
  protected isTriangleValid(): boolean {
    let valid = false
    const sides = [this.side1, this.side2, this.side3]

    // checks if any of the sides are not negative.
    if (!(Math.min(...sides) < 0)) {
      const sides = [this.side1, this.side2, this.side3]
      sides.sort(function(a, b) { return a - b })
      valid = sides[0] + sides[1] > sides[2]
    }

    return valid
  }

  // getAngles method - returns an array of the 3 angles.
  public getAngles(): number[] {
    if (this.isTriangleValid()) {
      const radianAngles = [
        Math.acos((Math.pow(this.side1, 2) + Math.pow(this.side2, 2) -
          Math.pow(this.side3, 2)) /
        (2 * this.side1 * this.side2)),
        Math.acos((Math.pow(this.side2, 2) + Math.pow(this.side3, 2) -
          Math.pow(this.side1, 2)) /
        (2 * this.side2 * this.side3)),
        Math.acos((Math.pow(this.side3, 2) + Math.pow(this.side1, 2) -
          Math.pow(this.side2, 2)) /
        (2 * this.side3 * this.side1))
      ]

      const degreeAngles = []

      for (let count = 0; count < radianAngles.length; count++) {
        degreeAngles.push(Math.round(radianAngles[count] * (180 / Math.PI)))
      }

      return degreeAngles
    } else {
      return [-1]
    }
  }

  // getArea method - returns the area of the triangle.
  public getArea(): number {
    if (this.isTriangleValid()) {
      // The semi-perimeter
      const sp = (this.side1 + this.side2 + this.side3) / 2
      const area = Math.sqrt(
        sp * (sp - this.side1) * (sp - this.side2) * (sp - this.side3)
      )

      return area
    } else {
      return -1
    }
  }

  // getName method - returns a name for the triangle.
  public getName(): string | number {
    if (this.isTriangleValid()) {
      let name = ''

      if (
        this.side1 === this.side2 &&
        this.side2 === this.side3
      ) {
        name = 'Equilateral'
      } else if (
        (this.side1 === this.side2 && this.side1 !== this.side3) ||
        (this.side2 === this.side3 && this.side2 !== this.side3)
      ) {
        name = 'Isosceles'
      } else {
        const angles = this.getAngles()
        let rightAngle = false

        // checks if one of the angles is 90.
        for (let count = 0; count < angles.length; count++) {
          if (angles[count] === 90) {
            rightAngle = true
            break
          }
        }

        if (rightAngle) {
          name = 'Right Angle'
        } else {
          name = 'Scalene'
        }
      }
      return name
    } else {
      return -1
    }
  }

  // getPerimeter method - returns the sum of all 3 sides.
  public getPerimeter(): number {
    if (this.isTriangleValid()) {
      return this.side1 + this.side2 + this.side3
    } else {
      return -1
    }
  }

}

export = Triangle
