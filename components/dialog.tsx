import { SendIc } from './icons'

const DialogComment = () => {
  return (
    <dialog
      id='commentDialog'
      className='fixed rounded-md p-3 right-0 bottom-20 sm:bottom-[80px] sm:right-[195px] sm:left-auto w-3/4 sm:w-auto
      sm:before:content-[" "] 
      sm:before:absolute 
      sm:before:w-0 
      sm:before:h-0 
      sm:before:left-auto 
      sm:before:right-3
      sm:before:bottom-[-21px] 
      sm:before:border-[12px] 
      sm:before:border-t-white
      sm:before:border-r-white
      sm:before:border-b-transparent
      sm:before:border-l-transparent'
      open
    >
      <form method='dialog' className='flex flex-col justify-center gap-3'>
        <textarea
          name='comment'
          id='comment'
          className='p-2.5 w-full text-sm border-none rounded-md outline-none'
          cols={30}
          placeholder='Dejame un comentario...'
        ></textarea>
        <button type='submit' className='cursor-not-allowed flex justify-end' title='Send comment'>
          <SendIc className='text-white bg-blue-600 rounded-md h-7 w-7 p-1' />
        </button>
      </form>
    </dialog>
  )
}

export default DialogComment
