import { Carousel, Col, Collapse, Row } from "antd"
import "./LearnGrid.css"
import CardItem from "../LearnCardItem";
const { Panel } = Collapse;
function LearnGrid() {
    const List = [
        {
            id: 1,
            title: "Header là gì?",
            description: "Header là..."
        },
        {
            id: 2,
            title: "Sidebar là gì?",
            description: "Sidebar 2 là..."
        },
        {
            id: 3,
            title: "Menu là gì?",
            description: "Menu là..."
        },
    ]
    return (
        <>
            {/* <Row gutter={[15, 10]}>
                <Col xxl={6} xl={6} lg={3} md={6} sm={12} xs={24}>
                    <div className="box">
                        Cột 1
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={3} md={6} sm={12} xs={24}>
                    <div className="box">
                        Cột 2
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={9} md={6} sm={12} xs={24}>
                    <div className="box">
                        Cột 3
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={9} md={6} sm={12} xs={24}>
                    <div className="box">
                        Cột 4
                    </div>
                </Col>
            </Row> */}

            <Carousel arrows infinite={false} autoplay>
                <div className="slider-item" >
                    <img src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/slider_1.jpg?1760674276246" alt="banner" />
                </div>
                <div className="slider-item">
                    <img src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/slider_1.jpg?1760674276246" alt="banner" />
                </div>
                <div className="slider-item">
                    <img src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/slider_1.jpg?1760674276246" alt="banner" />
                </div>
                <div className="slider-item">
                    <img src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/slider_1.jpg?1760674276246" alt="banner" />
                </div>
            </Carousel>

            <Collapse defaultActiveKey={"1"} accordion = {true}>
                {List.map(item => (
                    <Panel header= {item.title} key={item.id}>
                        <p>{item.description}</p>
                    </Panel>
                ))}
            </Collapse>

            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title="Box 1" />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title="Box 2" />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title="Box 3" />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title="Box 4" />
                </Col>
            </Row>

            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CardItem title="Box 5" style={{ height: "400px" }} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="Box 6" style={{ height: "400px" }} />
                </Col>
            </Row>

            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="Box 7" style={{ height: "400px" }} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CardItem title="Box 8" style={{ height: "400px" }} />
                </Col>
            </Row>

            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="Box 9" style={{ height: "400px" }} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="Box 10" style={{ height: "400px" }} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="Box 11" style={{ height: "400px" }} />
                </Col>
            </Row>


        </>
    )
}
export default LearnGrid;
