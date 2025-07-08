'use client';

import React from 'react';
import Image from 'next/image';
import {
  ScheduleSection,
  Title,
  ScheduleTable,
  TableHeader,
  TableHeading,
  TableBody,
  TableRow,
  TableCell,
  ScheduleThumb,
  ScheduleInfo,
  SpeakerInfo,
  SpeakerImage,
  SpeakerName,
} from './styles';

const scheduleData = [
  {
    day: 'Dia 1',
    date: 'October 12, 2023',
    events: {
      wednesday: {
        time: '10:00 - 12:00',
        title: 'Jazz',
        speaker: 'Genny',
        image: '/images/artists/abstral-official-bdlMO9z5yco-unsplash.jpg',
      },
      thursday: {
        time: '13:00 - 15:00',
        title: 'Pop',
        speaker: 'Jenna',
        image: '/images/artists/joecalih-UmTZqmMvQcw-unsplash.jpg',
      },
      friday: {
        time: '16:00 - 18:00',
        title: 'Rock',
        speaker: 'Johnson',
        image: '/images/artists/soundtrap-rAT6FJ6wltE-unsplash.jpg',
      },
    },
  },
  {
    day: 'Dia 2',
    date: 'October 14, 2023',
    events: {
      wednesday: {
        time: '10:00 - 12:00',
        title: 'Country',
        speaker: 'Bella',
        image: '/images/artists/abstral-official-bdlMO9z5yco-unsplash.jpg',
      },
      thursday: {
        time: '13:00 - 15:00',
        title: 'Hip Hop',
        speaker: 'Tania',
        image: '/images/artists/joecalih-UmTZqmMvQcw-unsplash.jpg',
      },
      friday: null,
    },
  },
  {
    day: 'Dia 3',
    date: 'October 16, 2023',
    events: {
      wednesday: null,
      thursday: {
        time: '10:00 - 12:00',
        title: 'Rap',
        speaker: 'Jenny',
        image: '/images/artists/abstral-official-bdlMO9z5yco-unsplash.jpg',
      },
      friday: {
        time: '13:00 - 15:00',
        title: 'Pop',
        speaker: 'John',
        image: '/images/artists/soundtrap-rAT6FJ6wltE-unsplash.jpg',
      },
    },
  },
];

const Schedule: React.FC = () => {
  return (
    <ScheduleSection id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Title>Programação do Evento</Title>
          </div>
          <div className="col-12">
            <ScheduleTable>
              <TableHeader>
                <TableRow>
                  <TableHeading>Data</TableHeading>
                  <TableHeading>Quarta-feira</TableHeading>
                  <TableHeading>Quinta-feira</TableHeading>
                  <TableHeading>Sexta-feira</TableHeading>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleData.map((schedule, index) => (
                  <TableRow key={index}>
                    <TableCell $isDate>{schedule.day}</TableCell>
                    {['wednesday', 'thursday', 'friday'].map((dayKey) => {
                      const event = schedule.events[dayKey as keyof typeof schedule.events];
                      return (
                        <TableCell key={dayKey}>
                          {event ? (
                            <ScheduleThumb>
                              <ScheduleInfo>
                                <h4>{event.title}</h4>
                                <p>{event.time}</p>
                                <SpeakerInfo>
                                  <SpeakerImage>
                                    <Image
                                      src={event.image}
                                      alt={event.speaker}
                                      width={50}
                                      height={50}
                                      className="speaker-image"
                                    />
                                  </SpeakerImage>
                                  <SpeakerName>{event.speaker}</SpeakerName>
                                </SpeakerInfo>
                              </ScheduleInfo>
                            </ScheduleThumb>
                          ) : null}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </ScheduleTable>
          </div>
        </div>
      </div>
    </ScheduleSection>
  );
};

export default Schedule;
