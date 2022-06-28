import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SessionCard from '../components/SessionCard';
import { HStack, Grid, GridItem } from '@chakra-ui/react';
import NoSessions from '../components/NoSessions';

const MyClass = () => {
  const param = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessionsFromAPI = async () => {
      const request = await fetch('/api/v1/session/' + param.id);
      const data = await request.json();
      console.log(data.message);
      setSessions(data.message);
    };
    try {
      fetchSessionsFromAPI();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Navbar />
      {sessions.length > 0 ? (
        <HStack spacing={5} margin={5}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {sessions.map((session, index) => {
              return (
                <GridItem key={index} w="100%" h="100%">
                  <SessionCard key={index} id={session.id} />
                </GridItem>
              );
            })}
          </Grid>
        </HStack>
      ) : (
        <NoSessions />
      )}
    </>
  );
};

export default MyClass;