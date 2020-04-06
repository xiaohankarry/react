import React from 'react'
import styles from './v-input.module.css'
import propTypes from 'prop-types'

export default class ViInput extends React.Component{
    static defaultProps = {
        type:'text',
        model:null,
        multi:false,
        label:'',
        style:{}
    }
    static propTypes = {
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
    //表单是否有标题
    renderSpan = (label)=>{
        return label ? <span>{label}</span> : null
    };
    //单行输入框渲染
    renderInput = ()=>{
        let {model,label,type,style} = this.props;
        let inputEle = null
        //非受控
        if(!model){
            inputEle=(
                <div className={styles.ucInput} style={style}>
                    <input type={type} defaultValue='' style={{paddingLeft: label ? "1.24rem" : '0.24rem'}}/>
                    {this.renderSpan(label)}
                </div>
            );
            return inputEle;

        }
        //受控元素
        let {model:{name,value,onChange}} = this.props;
        inputEle = (
            <div className={styles.ucInput} style={style}>
            <input 
            type={type} 
            name={name}
            value={value}
            onChange={onChange} 
            style={{paddingLeft: label ? "1.24rem" : '0.24rem'}}/>
            {this.renderSpan(label)}
        </div>
        )
        return inputEle
    };
    //多行输入框
    renderTextarea = () => {
        let {model,label} = this.props;
        let multiEle = null;
        if(!model){
            multiEle = (
                <div>
                    {this.renderSpan(label)}
                    <textarea></textarea>
                </div>
            );
            return multiEle
        }
        let {model:{name,value,onChange}} = this.props;
        multiEle = (
            <div>
                {this.renderSpan(label)}
                <textarea 
                    value={value}
                    name={name}
                    onChange={onChange}
                ></textarea>
            </div>
        )
        return multiEle
    }
    render(){
        let {multi} = this.props
        return multi ? this.renderTextarea() : this.renderInput();
}}