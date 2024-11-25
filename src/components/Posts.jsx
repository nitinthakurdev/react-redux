import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUser } from '../store/slices/userdetail'
import Loader from './Loader'

const Posts = () => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state.app)
	console.log(data)
	useEffect(() => {
		dispatch(getUser())
	}, [])

	if (data.loading) {
		return <Loader />
	}

	return (
		<div className='grid grid-cols-3 gap-5' >
			{data.users?.map((item,index)=>(
				<div className="bg-white overflow-hidden shadow rounded-lg border mx-4 box" key={index} >
				<div className="px-4 py-5 sm:px-6">
					<div className="flex justify-between items-center">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Contact Details
						</h3>
						<button className="text-sm font-medium text-gray-500">
							Update
						</button>
						<button onClick={()=>{dispatch(deleteUser(item?.id))}} className="text-sm font-medium text-gray-500">
							Delete
						</button>
					</div>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">
						The contact information is provided below.
					</p>
				</div>
				<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
					<dl className="sm:divide-y sm:divide-gray-200">
						<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Full name
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{item.name}
							</dd>
						</div>
						<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Email address
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{item.email}
							</dd>
						</div>
						<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Phone number
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{item.phone}
							</dd>
						</div>
						<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Message
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{item.message}
							</dd>
						</div>
						
					</dl>
				</div>
			</div>
			))}
		</div>
	)
}

export default Posts