import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="aboutme" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="myworks" onClick={toggle}>
                        My Works
                    </SidebarLink>
                    <SidebarLink to="qualification" onClick={toggle}>
                        Qualification
                    </SidebarLink>
                    <SidebarLink to="experience" onClick={toggle}>
                        Experience
                    </SidebarLink>
                    {/* <SidebarLink to="contactme">
                        Contact me
                    </SidebarLink> */}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="contactme">Contact me</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
