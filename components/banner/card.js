import React from 'react'
import { Card,CardBody,CardHeader,CardTitle,CardText } from 'reactstrap'
const card = () => {
  return (
      <>
    <div>
  <Card
    className="my-2"
    color="primary"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
      Header
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
    </div>
    </>
  )
}

export default card
