from flask import Flask, send_file, Response, request

app = Flask(__name__)

@app.route('/video')
def stream_video():
    hash_value = request.args.get('hash')
    
    video_path = hash_value  # Path to your video file
    chunk_size = 8 * 1024 * 1024  # 8MB chunks
    return Response(stream_with_chunks(video_path, chunk_size), mimetype='video/mp4')

def stream_with_chunks(path, chunk_size):
    with open(path, 'rb') as f:
        while True:
            chunk = f.read(chunk_size)
            if not chunk:
                break
            yield chunk

if __name__ == '__main__':
    app.run(debug=True)
