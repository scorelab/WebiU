import React from 'react'
import './style.sass'
import PropTypes from "prop-types"

export const PopularTags = ({ tagData, name }) => {

    return (
        <div className='tag-container'>
            <div className='tag-header'>
                {name}
            </div>
            <div className='tag-body'>
                {
                    tagData && tagData.map(i => {
                        switch (i.popularity) {
                            case 1:
                                return (
                                    <div className='tag-item-size-1' key={i.tagId} >
                                        {i.tagName}
                                    </div>
                                )
                            case 2:
                                return (
                                    <div className='tag-item-size-2' key={i.tagId}>
                                        {i.tagName}
                                    </div>
                                )
                            case 3:
                                return (
                                    <div className='tag-item-size-3' key={i.tagId}>
                                        {i.tagName}
                                    </div>
                                )
                            default:
                                return (
                                    <div className='tag-item-size-4' key={i.tagId}>
                                        {i.tagName}
                                    </div>
                                )
                        }
                    }
                    )
                }
            </div>
        </div>
    )
}

PopularTags.propTypes = {
    name: PropTypes.string,
    tagData: PropTypes.array,
}