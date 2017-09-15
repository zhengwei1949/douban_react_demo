import React,{Component} from 'react';
export default class MovieList extends Component{
    constructor(props){
        super(props);
        this.state = {
            subjects:[]
        }
    }
    myFetch = ()=>{
        // fetch(`http://localhost:4000/v2/movie/${this.props.params.movieType}/${this.props.params.page}`)
        fetch('/aaa.json')
        .then((res)=>{
            res.json().then((data)=>{
                // console.log(data);
                this.setState({
                    subjects:data.subjects
                })
            })
        })
    }
    //vue,react是没有一个东西叫控制器，那我们逻辑写哪 --> 生命周期函数
    componentDidMount(){
        // this.fetch();
        // fetch(`http://localhost:4000/v2/movie/${this.props.params.movieType}/${this.props.params.page}`)
        let url = '';
        console.log(this.props.params.movieType)
        switch(this.props.params.movieType){
            case 'in_theaters':
                url = '/in_theaters.json';
                break;
            case 'coming_soon':
                url = '/coming_soon.json';
                break;
            case 'top250':
                url = '/top250.json';
                break;
            default:
                break;
        }
        console.log(url);
        fetch(url)
        .then((res)=>{
            res.json().then((data)=>{
                // console.log(data);
                this.setState({
                    subjects:data.subjects
                })
            })
        })
    }
    componentWillReceiveProps(prevProps, prevState) {
        let url = '';
        console.log(this.props.params);
        switch(this.props.params.movieType){
            case 'in_theaters':
                url = '/in_theaters.json';
                break;
            case 'coming_soon':
                url = '/coming_soon.json';
                break;
            case 'top250':
                url = '/top250.json';
                break;
            default:
                break;
        }
        console.log(url);
        fetch(url)
        .then((res)=>{
            res.json().then((data)=>{
                // console.log(data);
                this.setState({
                    subjects:data.subjects
                })
            })
        })
    }
    //componetDidMount只执行一次
    // componentDidUpdate(){
    //     // this.fetch();
    //     fetch(`http://localhost:4000/v2/movie/${this.props.params.movieType}/${this.props.params.page}`)
    //     .then((res)=>{
    //         res.json().then((data)=>{
    //             // console.log(data);
    //             this.setState({
    //                 subjects:data.subjects
    //             })
    //         })
    //     })
    // }
    getNext = ()=>{
        
    }
    render(){
        return (
            <div className="list">
        <ul>
            {
                this.state.subjects.map((item,index)=>{
                    return (
                        <li key={index}>
                            <a href="#/details">
                                <img src={item.images.large} alt="" />
                            </a>
                            <div className="meta">
                                <h4><span>{item.title}</span> <em>9.9分</em></h4>
                                <div className="otherinfo">类型:<span>古装</span></div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        <div className="paging">
            <label>总共：0条记录,第0/0页;</label>
            <button className="prev disable ">上一页</button>
            <button className="next" onClick={this.getNext}>下一页</button>
        </div>
    </div>
        )
    }
}