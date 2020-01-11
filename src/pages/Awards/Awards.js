import React from 'react';
import Layout from '../../components/Layout';
import {
    SectionTitle,
    Paragraph
} from '../../styles';
import {
    EducationItem,
    Institution,
    Degree
} from './styles';

const Awards = ({
    user}) => {
    return (<Layout user={
            user
        } >
        <div >
            <SectionTitle > Awards </SectionTitle> <ul>
             {
                        user.awards.map((award, i) => (<EducationItem key={
                                i
                            } >
                            <Institution > {
                                    award.title
                                } </Institution> <div >
                                    <Degree> {
                                            
                                        } </Degree>{ award.awarder} <span > - </span> <span> {
                                                  
                                                award.date}
                                                </span> </div> <Paragraph> {award.summary} </Paragraph> </EducationItem>
                                                ))
          } 
          </ul> </div> </Layout>
                                                );
                                                };
                                          export default Awards;
