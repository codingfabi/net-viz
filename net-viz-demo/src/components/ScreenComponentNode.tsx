import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent, FlexBoxDirection, Label, Popover, Text } from '@ui5/webcomponents-react';

interface IScreenComponentNodeData {
    type: string,
    id: string,
    name: string
}

interface IScreenComponentNodeProps {
    data: IScreenComponentNodeData,
    id: string
}


export const ScreenComponentNode = (props: IScreenComponentNodeProps) => {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    const handleOnVertexClick = () => {
        setPopoverIsOpen(true);
    }
    return (
        <>
            <Handle 
                type="target"
                position={Position.Right}
                style={{width: '0.1rem', height: '0.1rem'}}
                />
                <FlexBox 
                    id={props.id}
                    alignItems={FlexBoxAlignItems.Center}
                    style={{backgroundColor: '#007db8', width: '5rem', height: '2rem', borderRadius: '10px'}}
                    justifyContent={FlexBoxJustifyContent.Start}
                    onClick={handleOnVertexClick}>
                    <Label style={{color: "white", fontSize: '0.5rem', marginLeft: '0.25rem'}}>
                        {props.data.type}
                    </Label>
                </FlexBox>
            <Handle 
                type="source"
                position={Position.Left}
                style={{width: '0.1rem', height: '0.1rem'}}
            />
            <Popover
                className="footerPartNoPadding"
                headerText={props.data.type}
                horizontalAlign="Center"
                opener={props.id}
                placementType="Right"
                verticalAlign="Center"
                open={popoverIsOpen}
                onAfterClose={() => {
                    setPopoverIsOpen(false);
                }}
            >
                <FlexBox 
                    alignItems={FlexBoxAlignItems.Center}
                    direction={FlexBoxDirection.Column}
                    justifyContent={FlexBoxJustifyContent.SpaceBetween}
                    style={{width: '10rem', height: '5rem'}}
                >
                    <Label>Name: </Label><Text>{props.data.name}</Text>
                </FlexBox>
            </Popover>
        </>
    )
}