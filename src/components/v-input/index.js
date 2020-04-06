import React from 'react'
import styles from './v-input.module.css'
import propTypes from 'prop-types'
import renderSpan from './renderSpan'


export function ViInput({multi,model, type, label,style}){
    function renderTextarea(){
        let multiEle = null;
        if(!model){
            multiEle = (
                <div>
                    {renderSpan(label)}
                    <textarea></textarea>
                </div>
            );
            return multiEle
        }
        let {name,value,onChange} = model;
        multiEle = (
            <div>
                {renderSpan(label)}
                <textarea 
                    value={value}
                    name={name}
                    onChange={onChange}
                ></textarea>
            </div>
        )
        return multiEle
    }
    function renderInput(){
        let inputEle = null
        //非受控
        if(!model){
            inputEle=(
                <div className={styles.ucInput} style={style}>
                    <input type={type} defaultValue='' style={{paddingLeft: label ? "1.24rem" : '0.24rem'}}/>
                    {renderSpan(label)}
                </div>
            );
            return inputEle;

        }
        //受控元素
        let {name,value,onChange} = model;
        inputEle = (
            <div className={styles.ucInput} style={style}>
            <input 
            type={type} 
            name={name}
            value={value}
            onChange={onChange} 
            style={{paddingLeft: label ? "1.24rem" : '0.24rem'}}/>
            {renderSpan(label)}
        </div>
        )
        return inputEle
    }
    return multi ? renderTextarea() : renderInput();
}

ViInput.defaultProps = {
    type:'text',
    model:null,
    multi:false,
    label:'',
    style:{}
}
ViInput.propTypes = {
    type:propTypes.string,
    model:propTypes.shape({
        name:propTypes.string.isRequired,
        value:propTypes.string.isRequired,
        onChange:propTypes.func.isRequired
    }),
    multi:propTypes.bool,
    label:propTypes.string,
    style:propTypes.object
}