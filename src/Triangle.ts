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

  // perimeter method - returns the sum of all angles.
  private perimeter(): number {
    let perimeter

    if (this.isValid()) {
      perimeter = this.side1 + this.side2 + this.side3
    } else {
      perimeter = -1
    }

    return perimeter
  }

  // semiPerimeter method - returns the half of the triangle's perimeter.
  public semiPerimeter(): number {
    let semiPerimeter
    if (this.isValid()) {
      semiPerimeter = this.perimeter() / 2
    } else {
      semiPerimeter = -1
    }
    return semiPerimeter
  }

  // isValid method - determines if the triangle is valid.
  public isValid(): boolean {
    let valid = false
    const sides = [this.side1, this.side2, this.side3]

    // checks if any of the sides are not negative.
    if (!(Math.min(...sides) < 0)) {
      const sides = [this.side1, this.side2, this.side3]
      sides.sort(function (a, b) {
        return a - b
      })
      valid = sides[0] + sides[1] > sides[2]
    }

    return valid
  }

  // getAngles method - returns an array of the 3 angles.
  public angle(angleNumber: number): number {
    if (this.isValid() && angleNumber > 0 && angleNumber < 4) {
      // I do not want to redo this, so I will leave the array here.
      const radianAngles = [
        Math.acos(
          (Math.pow(this.side1, 2) +
            Math.pow(this.side2, 2) -
            Math.pow(this.side3, 2)) /
            (2 * this.side1 * this.side2)
        ),
        Math.acos(
          (Math.pow(this.side2, 2) +
            Math.pow(this.side3, 2) -
            Math.pow(this.side1, 2)) /
            (2 * this.side2 * this.side3)
        ),
        Math.acos(
          (Math.pow(this.side3, 2) +
            Math.pow(this.side1, 2) -
            Math.pow(this.side2, 2)) /
            (2 * this.side3 * this.side1)
        )
      ]

      return radianAngles[angleNumber - 1]
    } else {
      return -1
    }
  }

  // area method - returns the area of the triangle.
  public area(): number {
    if (this.isValid()) {
      // The semi-perimeter
      const sp = this.semiPerimeter()
      const area = Math.sqrt(
        sp * (sp - this.side1) * (sp - this.side2) * (sp - this.side3)
      )

      return area
    } else {
      return -1
    }
  }

  // getType method - returns a name for the triangle.
  public getType(): string {
    if (this.isValid()) {
      let name = ''

      if (this.side1 === this.side2 && this.side2 === this.side3) {
        name = 'Equilateral'
      } else if (
        (this.side1 === this.side2 && this.side1 !== this.side3) ||
        (this.side2 === this.side3 && this.side2 !== this.side1) ||
        (this.side3 === this.side1 && this.side3 !== this.side2)
      ) {
        name = 'Isosceles'
      } else {
        const angles = [this.angle(1), this.angle(2), this.angle(3)]
        let rightAngle = false

        // checks if one of the angles is 90.
        for (let count = 0; count < angles.length; count++) {
          if (angles[count] * (180 / Math.PI) === 90) {
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
      return '-1'
    }
  }
}

export = Triangle
