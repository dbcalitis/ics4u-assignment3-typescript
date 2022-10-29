/**
 * Triangles
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-29
 */

import Triangle from './Triangle'

const equiTriangle = new Triangle(10, 10, 10)

console.log('Triangle 1:')
console.log('Name: ' + String(equiTriangle.getName()))
console.log('Perimeter: ' + String(equiTriangle.getPerimeter()))
console.log('Area: ' + String(equiTriangle.getArea()))
console.log('Sides: ' + String(equiTriangle.getSides()))
console.log('Angles: ' + String(equiTriangle.getAngles()))

console.log()

const isoTriangle = new Triangle(15, 15, 5)

console.log('Triangle 2:')
console.log('Name: ' + String(isoTriangle.getName()))
console.log('Perimeter: ' + String(isoTriangle.getPerimeter()))
console.log('Area: ' + String(isoTriangle.getArea()))
console.log('Sides: ' + String(isoTriangle.getSides()))
console.log('Angles: ' + String(isoTriangle.getAngles()))

console.log()

const rightTriangle = new Triangle(3, 4, 5)

console.log('Triangle 3:')
console.log('Name: ' + String(rightTriangle.getName()))
console.log('Perimeter: ' + String(rightTriangle.getPerimeter()))
console.log('Area: ' + String(rightTriangle.getArea()))
console.log('Sides: ' + String(rightTriangle.getSides()))
console.log('Angles: ' + String(rightTriangle.getAngles()))

console.log()

const scaTriangle = new Triangle(10, 20, 15)

console.log('Triangle 4:')
console.log('Name: ' + String(scaTriangle.getName()))
console.log('Perimeter: ' + String(scaTriangle.getPerimeter()))
console.log('Area: ' + String(scaTriangle.getArea()))
console.log('Sides: ' + String(scaTriangle.getSides()))
console.log('Angles: ' + String(scaTriangle.getAngles()))

console.log()

const invalidTriangle = new Triangle(123, 10, 25)

console.log('Triangle 4:')
console.log('Name: ' + String(invalidTriangle.getName()))
console.log('Perimeter: ' + String(invalidTriangle.getPerimeter()))
console.log('Area: ' + String(invalidTriangle.getArea()))
console.log('Sides: ' + String(invalidTriangle.getSides()))
console.log('Angles: ' + String(invalidTriangle.getAngles()))

console.log()

const invalidTriangle2 = new Triangle(-1, 9, 5)

console.log('Triangle 4:')
console.log('Name: ' + String(invalidTriangle2.getName()))
console.log('Perimeter: ' + String(invalidTriangle2.getPerimeter()))
console.log('Area: ' + String(invalidTriangle2.getArea()))
console.log('Sides: ' + String(invalidTriangle2.getSides()))
console.log('Angles: ' + String(invalidTriangle2.getAngles()))

console.log('\nDone.')
