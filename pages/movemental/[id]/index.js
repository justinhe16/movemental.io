import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ReactPlayer from 'react-player'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import VideoSpanner from '../../../components/videoSpanner/videoSpanner'
import Annotation from '../../../components/annotation/annotation'
import homeStyles from '../../../styles/Home.module.css'
import styles from '../../../styles/Movemental.module.css'

import { getSampleAnnotation } from '../../api/movemental.js'

export default function Movemental(props) {
  let [videoPlayerWidth, setWidth] = useState(0);
  let [videoPlayerHeight, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth/2 - 10);
    setHeight(360 * (window.innerWidth/2)/640);
  });

  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col className={styles.left}>
          <ReactPlayer
            url = {props.movemental.videoLink}
            width = {videoPlayerWidth.toString() + "px"}
            height = {videoPlayerHeight.toString() + "px"}
            controls = {false}
          />
          <VideoSpanner width={videoPlayerWidth.toString() + "px"}/>
        </Col>
        <Col className={styles.right}>
          <Annotation width={"90%"} content=""/>
        </Col>
      </Row>
    </Container>
  )
}

export async function getStaticPaths() {
  console.log('@getStaticPaths');
  const annotation = await getSampleAnnotation();
  return {
    paths: [{params: {id: annotation.id}}],
    fallback: false
  }
}

export async function getStaticProps() {
  console.log('@getStaticProps');
  const movemental = await getSampleAnnotation();
  return {
    props: {
      movemental,
    },
  }
}
