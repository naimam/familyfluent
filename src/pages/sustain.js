import React from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';



function sustain () {
  return (
    <div className='container sustain spacer'>
      <div className='goal-statement'>
      <Card style={{ marigin:'20px' }}>
      <Card.Img variant="top" src="https://i.imgur.com/t6GHBsg.png" className='sustain-pic'/>
      <Card.Body>
        <Card.Title style={{color:'Green',fontWeight:'bold'}}>Our Goal:</Card.Title>
        <Card.Text>
        Family Fluent is committed to reducing 30% of our carbon emissions in the next 5 years by making sustainable changes to reach science-based targets. Join us as we embark on making the world a better place for all our families. <br/>
        </Card.Text>
        <Card.Title style={{color:'Green',fontWeight:'bold'}}>Our Progress:</Card.Title>
        <Card.Text>
        Our new web design is using 60% less energy than our previous design thanks to the reduction of some of our physical data centers. Also, by using serverless technology from Amazon Web Services, our carbon footprint will reduce as Amazon follows through on their commitment to reach 100% renewable energy use. <br/>
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='left spacer'>
       <div>
        <div className='border'>
        <h2 style={{textAlign:'center', fontWeight:'bold', color: 'green'}}>Our Metrics</h2>
        <p style={{margin:'10px'}}>To reach our goals, we will need a way to track our progress. This will be done using the 4 metrics listed below as they are the industry standard. We understand the importance of transparency and will therefore be making these metrics available on our website.</p>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>GreenHouse Gas Emissions</Accordion.Header>
        <Accordion.Body>
        Calculated into a “carbon footprint” metric that accounts for direct and indirect release of greenhouse gases<br/><br/>
        <h3>How we look to improve:</h3> 
          <ul>
            <il>- Managing Online Atmosphere</il><br/>
            <il>- Offseting carbon costs</il>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Supplier Environment Sustainability Index</Accordion.Header>
        <Accordion.Body>
          
        Calculated by looking at sustainability ratings of your supplier’s products<br/><br/>
        <h3>How we look to improve:</h3> 
          <ul>
            <il>- Moving to suppliers with a focus on sustainability</il>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Water Use</Accordion.Header>
        <Accordion.Body>
        Compared against benchmarks for our industry<br/><br/>
        <h3>How we look to improve:</h3> 
          <ul>
            <il>- Installing low-flow Toilets in our facilities</il><br/>
            <il>- Recycling Grey Water for irrigation</il>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Total Waste Generated</Accordion.Header>
        <Accordion.Body>
        Calculated by keeping track of waste generated weekly or monthly (in each daycare center)<br/><br/>
        <h3>How we look to improve:</h3>
          <ul>
            <il>- Investing in products that are not packaged in single-use plastics</il><br/>
            <il>- To prevent energy waste, we will invest in energy efficient Technology and infrastructure</il>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
      <div className='border' style={{marginTop:'10px'}}>
          <h3 style={{textAlign:'center'}}>Sustainability Measures</h3>
          <p style={{margin:'10px'}}>There are 5 dimensions to sustainability, and we will be addressing each of them. Come back soon for more information on our initiatives.
          <br/>1.	Environmental
          <br/>2.	Social 
          <br/>3.	Economic
          <br/>4.	Technical
          <br/>5.	Institutional
          </p>
        </div>
      </div>
      
      </div>
      <div className='spacer right'>
        <img src='https://i.imgur.com/T9mWyKk.jpg' className='sustain-pic'></img>
      </div>
    </div>
  )
}

export default sustain