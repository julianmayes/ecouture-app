import React from 'react';
import styled from 'styled-components';
import { color } from '../public/color'

const AboutResourcesContUI = styled.div`

    height: 75px;
    width: 365px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: row;

    `
const AboutButtonUI = styled.button`

    height: 75px;
    width: 182.5px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px 0px 0px 10px;
    background-color: white;
    color: ${color.green};
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center; 

    `

const ResourcesButtonUI = styled.button`

    height: 75px;
    width: 182.5px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 10px 10px 0px;
    background-color: ${color.green};
    color: white;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;


    `

export const AboutResourcesCont = () => {

    return (
        <AboutResourcesContUI>

            <AboutButtonUI>
                About
            </AboutButtonUI>

            <ResourcesButtonUI>
                Resources
            </ResourcesButtonUI>

        </AboutResourcesContUI>
    )
}